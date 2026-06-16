param(
  [string]$BaseUrl = "https://chat.escolavozup.com",
  [int]$AccountId = 1,
  [string]$ApiToken = $env:CHATWOOT_API_TOKEN,
  [string]$AuthJson = $env:CHATWOOT_AUTH_JSON,
  [string]$GroupLabel = "grupo-whatsapp-bloqueado",
  [int]$MaxPages = 30,
  [switch]$DoIt
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "[chatwoot-fix] $Message"
}

function New-ChatwootHeaders {
  $headers = @{ "Accept" = "application/json" }

  if (-not [string]::IsNullOrWhiteSpace($ApiToken)) {
    $headers["api_access_token"] = $ApiToken
    return $headers
  }

  if (-not [string]::IsNullOrWhiteSpace($AuthJson)) {
    $auth = $AuthJson | ConvertFrom-Json
    foreach ($key in @("access-token", "client", "uid", "expiry", "token-type")) {
      $property = $auth.PSObject.Properties[$key]
      if ($null -ne $property -and -not [string]::IsNullOrWhiteSpace([string]$property.Value)) {
        $headers[$key] = [string]$property.Value
      }
    }
    if ($headers.ContainsKey("access-token") -and $headers.ContainsKey("client") -and $headers.ContainsKey("uid")) {
      return $headers
    }
  }

  throw "Informe CHATWOOT_API_TOKEN ou CHATWOOT_AUTH_JSON antes de executar."
}

function Invoke-Chatwoot {
  param(
    [ValidateSet("Get", "Post", "Put")]
    [string]$Method,
    [string]$Path,
    [object]$Body = $null
  )

  $uri = $BaseUrl.TrimEnd("/") + $Path

  try {
    if ($null -ne $Body) {
      $json = $Body | ConvertTo-Json -Depth 20
      return Invoke-RestMethod -Method $Method -Uri $uri -Headers $script:Headers -Body $json -ContentType "application/json"
    }
    return Invoke-RestMethod -Method $Method -Uri $uri -Headers $script:Headers
  } catch {
    $statusCode = $null
    if ($_.Exception.Response) {
      $statusCode = [int]$_.Exception.Response.StatusCode
    }
    throw "Falha em $Method $Path (HTTP $statusCode): $($_.Exception.Message)"
  }
}

function As-Array {
  param([object]$Value)
  if ($null -eq $Value) { return @() }
  if ($Value -is [System.Array]) { return @($Value) }
  return @($Value)
}

function Get-PayloadItems {
  param([object]$Response)
  if ($null -eq $Response) { return @() }
  if ($null -ne $Response.payload) { return As-Array $Response.payload }
  if ($null -ne $Response.data -and $null -ne $Response.data.payload) { return As-Array $Response.data.payload }
  if ($Response -is [System.Array]) { return @($Response) }
  return @()
}

function Test-HasMore {
  param([object]$Response)
  return ($null -ne $Response.meta -and $null -ne $Response.meta.has_more -and [bool]$Response.meta.has_more)
}

function Normalize-Compact {
  param([string]$Text)
  if ([string]::IsNullOrWhiteSpace($Text)) { return "" }

  $normalized = $Text.Normalize([System.Text.NormalizationForm]::FormD)
  $builder = New-Object System.Text.StringBuilder
  foreach ($char in $normalized.ToCharArray()) {
    $category = [System.Globalization.CharUnicodeInfo]::GetUnicodeCategory($char)
    if ($category -ne [System.Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$builder.Append($char)
    }
  }
  return ($builder.ToString().ToLowerInvariant() -replace "[^a-z0-9]", "")
}

function Test-UpTrainingName {
  param([string]$Name)
  return (Normalize-Compact $Name) -eq "uptreinamentos"
}

function Format-ContactName {
  param([string]$Name)
  $clean = ($Name -replace "[^\p{L}\s]", " ").Trim()
  $clean = $clean -replace "\s+", " "
  if ([string]::IsNullOrWhiteSpace($clean)) { return $null }

  $culture = [System.Globalization.CultureInfo]::GetCultureInfo("pt-BR")
  return $culture.TextInfo.ToTitleCase($clean.ToLower($culture))
}

function Test-NameCandidate {
  param([string]$Name)
  if ([string]::IsNullOrWhiteSpace($Name)) { return $false }
  if ($Name.Length -lt 2 -or $Name.Length -gt 60) { return $false }

  $blocked = @("uptreinamentos", "ola", "obrigado", "obrigada", "comoposso", "possoajudar", "pedagoga", "atendimento")
  return -not ($blocked -contains (Normalize-Compact $Name))
}

function Find-InferredName {
  param([array]$Messages)

  $patterns = @(
    "(?i)\bme\s+chamo\s+([\p{L}]{2,}(?:\s+[\p{L}]{2,}){0,2})",
    "(?i)\bmeu\s+nome\s+(?:e|eh)\s+([\p{L}]{2,}(?:\s+[\p{L}]{2,}){0,2})",
    "(?i)\bsou\s+(?:o|a)\s+([\p{L}]{2,}(?:\s+[\p{L}]{2,}){0,2})"
  )

  foreach ($message in ($Messages | Sort-Object created_at)) {
    if ($null -eq $message.content -or [string]::IsNullOrWhiteSpace([string]$message.content)) { continue }
    foreach ($pattern in $patterns) {
      $match = [regex]::Match([string]$message.content, $pattern)
      if (-not $match.Success) { continue }
      $name = Format-ContactName $match.Groups[1].Value
      if (Test-NameCandidate $name) { return $name }
    }
  }

  return $null
}

function Get-ConversationId {
  param([object]$Conversation)
  if ($null -ne $Conversation.id) { return [int]$Conversation.id }
  if ($null -ne $Conversation.display_id) { return [int]$Conversation.display_id }
  return $null
}

function Get-ConversationName {
  param([object]$Conversation)
  if ($null -ne $Conversation.meta -and $null -ne $Conversation.meta.sender -and $null -ne $Conversation.meta.sender.name) {
    return [string]$Conversation.meta.sender.name
  }
  if ($null -ne $Conversation.contact -and $null -ne $Conversation.contact.name) {
    return [string]$Conversation.contact.name
  }
  return ""
}

function Test-WhatsAppGroupConversation {
  param([object]$Conversation)

  $values = @()
  $values += $Conversation.additional_attributes.source_id
  $values += $Conversation.additional_attributes.remoteJid
  $values += $Conversation.additional_attributes.chat_id

  if ($null -ne $Conversation.meta -and $null -ne $Conversation.meta.sender) {
    $values += $Conversation.meta.sender.identifier
    $values += $Conversation.meta.sender.phone_number
    $values += $Conversation.meta.sender.name
    foreach ($contactInbox in (As-Array $Conversation.meta.sender.contact_inboxes)) {
      $values += $contactInbox.source_id
    }
  }

  foreach ($message in (As-Array $Conversation.messages)) {
    $values += $message.source_id
    $values += $message.sender.identifier
  }

  foreach ($value in $values) {
    if ([string]::IsNullOrWhiteSpace([string]$value)) { continue }
    if (([string]$value).ToLowerInvariant() -match "@g\.us($|[^\w])") { return $true }
  }

  return (Normalize-Compact (Get-ConversationName $Conversation)).StartsWith("grupo")
}

function Search-UpTrainingContacts {
  $contactsById = @{}
  foreach ($query in @("Up Treinamentos", "uptreinamentos")) {
    for ($page = 1; $page -le $MaxPages; $page++) {
      $encoded = [uri]::EscapeDataString($query)
      $response = Invoke-Chatwoot -Method Get -Path "/api/v1/accounts/$AccountId/contacts/search?q=$encoded&page=$page&include_contact_inboxes=true"
      $contacts = Get-PayloadItems $response
      foreach ($contact in $contacts) {
        if ($null -ne $contact.id -and -not $contactsById.ContainsKey([int]$contact.id)) {
          $contactsById[[int]$contact.id] = $contact
        }
      }
      if (-not (Test-HasMore $response) -or $contacts.Count -eq 0) { break }
    }
  }
  return @($contactsById.Values)
}

function Get-ConversationMessages {
  param([int]$ConversationId)
  return Get-PayloadItems (Invoke-Chatwoot -Method Get -Path "/api/v1/accounts/$AccountId/conversations/$ConversationId/messages")
}

function Rename-UpTrainingContacts {
  $contacts = Search-UpTrainingContacts
  Write-Step "Contatos candidatos encontrados: $($contacts.Count)"

  $renamed = 0
  foreach ($contact in $contacts) {
    if ($null -eq $contact.id -or -not (Test-UpTrainingName ([string]$contact.name))) { continue }

    $conversations = Get-PayloadItems (Invoke-Chatwoot -Method Get -Path "/api/v1/accounts/$AccountId/contacts/$($contact.id)/conversations")
    $messages = @()
    foreach ($conversation in $conversations) {
      $conversationId = Get-ConversationId $conversation
      if ($null -ne $conversationId) { $messages += Get-ConversationMessages -ConversationId $conversationId }
    }

    $newName = Find-InferredName -Messages $messages
    if ([string]::IsNullOrWhiteSpace($newName)) {
      Write-Step "Contato #$($contact.id) mantido como '$($contact.name)' (sem nome claro nas mensagens)."
      continue
    }

    if ($DoIt) {
      Invoke-Chatwoot -Method Put -Path "/api/v1/accounts/$AccountId/contacts/$($contact.id)" -Body @{ name = $newName } | Out-Null
      Write-Step "Contato #$($contact.id) renomeado: '$($contact.name)' -> '$newName'"
    } else {
      Write-Step "[SIMULACAO] Contato #$($contact.id) seria renomeado: '$($contact.name)' -> '$newName'"
    }
    $renamed++
  }

  return $renamed
}

function Get-ConversationsByStatus {
  param([string]$Status)
  $all = @()
  for ($page = 1; $page -le $MaxPages; $page++) {
    $items = Get-PayloadItems (Invoke-Chatwoot -Method Get -Path "/api/v1/accounts/$AccountId/conversations?assignee_type=all&status=$Status&page=$page")
    if ($items.Count -eq 0) { break }
    $all += $items
  }
  return $all
}

function Resolve-GroupConversations {
  $groups = @{}
  foreach ($status in @("open", "pending", "snoozed")) {
    $conversations = Get-ConversationsByStatus -Status $status
    Write-Step "Conversas '$status' lidas: $($conversations.Count)"
    foreach ($conversation in $conversations) {
      $conversationId = Get-ConversationId $conversation
      if ($null -ne $conversationId -and -not $groups.ContainsKey($conversationId) -and (Test-WhatsAppGroupConversation $conversation)) {
        $groups[$conversationId] = $conversation
      }
    }
  }

  Write-Step "Conversas de grupo candidatas: $($groups.Count)"
  foreach ($conversation in $groups.Values) {
    $conversationId = Get-ConversationId $conversation
    $labels = @((As-Array $conversation.labels) + $GroupLabel | Select-Object -Unique)
    $name = Get-ConversationName $conversation

    if ($DoIt) {
      Invoke-Chatwoot -Method Post -Path "/api/v1/accounts/$AccountId/conversations/$conversationId/labels" -Body @{ labels = $labels } | Out-Null
      Invoke-Chatwoot -Method Post -Path "/api/v1/accounts/$AccountId/conversations/$conversationId/toggle_status" -Body @{ status = "resolved" } | Out-Null
      Write-Step "Grupo #$conversationId resolvido e etiquetado: '$name'"
    } else {
      Write-Step "[SIMULACAO] Grupo #$conversationId seria resolvido/etiquetado: '$name'"
    }
  }

  return $groups.Count
}

$script:Headers = New-ChatwootHeaders

if ($DoIt) { Write-Step "Modo aplicando alteracoes." } else { Write-Step "Modo simulacao. Use -DoIt para aplicar." }

$renamed = Rename-UpTrainingContacts
$resolved = Resolve-GroupConversations

Write-Step "Resumo: contatos_renomeados=$renamed, grupos_resolvidos=$resolved"
