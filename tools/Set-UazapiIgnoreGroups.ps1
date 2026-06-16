param(
  [string]$BaseUrl = $(if ($env:UAZAPI_BASE_URL) { $env:UAZAPI_BASE_URL } else { "https://free.uazapi.com" }),
  [string[]]$Tokens = @($env:UAZAPI_BRUNA_TOKEN, $env:UAZAPI_GABI_TOKEN, $env:UAZAPI_INSTANCE_TOKEN),
  [string]$WebhookUrl = "",
  [string[]]$DefaultEvents = @("messages", "messages_update", "connection"),
  [switch]$DoIt
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "[uazapi-groups] $Message"
}

function Invoke-Uazapi {
  param(
    [ValidateSet("Get", "Post")]
    [string]$Method,
    [string]$Path,
    [string]$Token,
    [object]$Body = $null
  )

  $headers = @{
    "Accept" = "application/json"
    "token" = $Token
  }

  $uri = $BaseUrl.TrimEnd("/") + $Path

  try {
    if ($null -ne $Body) {
      $json = $Body | ConvertTo-Json -Depth 20
      return Invoke-RestMethod -Method $Method -Uri $uri -Headers $headers -Body $json -ContentType "application/json"
    }

    return Invoke-RestMethod -Method $Method -Uri $uri -Headers $headers
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

  if ($null -eq $Value) {
    return @()
  }

  if ($Value -is [System.Array]) {
    return @($Value)
  }

  return @($Value)
}

function Merge-ExcludeMessages {
  param([object]$Current)

  $items = @()
  $items += As-Array $Current
  $items += "wasSentByApi"
  $items += "isGroupYes"

  return @($items | Where-Object { -not [string]::IsNullOrWhiteSpace([string]$_) } | Select-Object -Unique)
}

function Remove-NullProperties {
  param([hashtable]$Body)

  $clean = @{}
  foreach ($key in $Body.Keys) {
    if ($null -ne $Body[$key]) {
      $clean[$key] = $Body[$key]
    }
  }
  return $clean
}

function Build-WebhookBody {
  param([object]$Webhook)

  $body = @{
    action = $(if ($Webhook.id) { "update" } else { $null })
    id = $Webhook.id
    enabled = $(if ($null -ne $Webhook.enabled) { [bool]$Webhook.enabled } else { $true })
    url = [string]$Webhook.url
    events = @(As-Array $Webhook.events)
    excludeMessages = Merge-ExcludeMessages $Webhook.excludeMessages
    addUrlEvents = $(if ($null -ne $Webhook.addUrlEvents) { [bool]$Webhook.addUrlEvents } else { $false })
    addUrlTypesMessages = $(if ($null -ne $Webhook.addUrlTypesMessages) { [bool]$Webhook.addUrlTypesMessages } else { $false })
  }

  return Remove-NullProperties $body
}

$tokensToProcess = @($Tokens | Where-Object { -not [string]::IsNullOrWhiteSpace([string]$_) } | Select-Object -Unique)
if ($tokensToProcess.Count -eq 0) {
  throw "Informe UAZAPI_BRUNA_TOKEN, UAZAPI_GABI_TOKEN ou UAZAPI_INSTANCE_TOKEN antes de executar."
}

if ($DoIt) {
  Write-Step "Modo aplicando alteracoes em $($tokensToProcess.Count) token(s)."
} else {
  Write-Step "Modo simulacao em $($tokensToProcess.Count) token(s). Use -DoIt para aplicar."
}

for ($index = 0; $index -lt $tokensToProcess.Count; $index++) {
  $token = [string]$tokensToProcess[$index]
  $label = "token#$($index + 1)"

  Write-Step "Lendo webhook de $label."
  $webhooks = @(Invoke-Uazapi -Method Get -Path "/webhook" -Token $token)

  if ($webhooks.Count -eq 0) {
    if ([string]::IsNullOrWhiteSpace($WebhookUrl)) {
      Write-Step "$label sem webhook configurado. Informe -WebhookUrl para criar um com filtro de grupos."
      continue
    }

    $webhooks = @(
      [pscustomobject]@{
        enabled = $true
        url = $WebhookUrl
        events = $DefaultEvents
        excludeMessages = @()
        addUrlEvents = $false
        addUrlTypesMessages = $false
      }
    )
  }

  foreach ($webhook in $webhooks) {
    if ([string]::IsNullOrWhiteSpace([string]$webhook.url)) {
      Write-Step "$label webhook ignorado porque nao tem URL."
      continue
    }

    $body = Build-WebhookBody $webhook
    $filters = ($body.excludeMessages -join ", ")

    if ($DoIt) {
      Invoke-Uazapi -Method Post -Path "/webhook" -Token $token -Body $body | Out-Null
      Write-Step "$label webhook atualizado com filtros: $filters"
    } else {
      Write-Step "[SIMULACAO] $label webhook seria atualizado com filtros: $filters"
    }
  }
}
