# SEO e Google Tag Manager

Checklist para publicar a landing da VozUP com a base técnica correta para Google Search.

SEO não garante primeira posição automaticamente. O objetivo deste projeto é deixar a página fácil de rastrear, indexar e entender; ranking também depende de reputação local, avaliações, concorrência, links, tempo e qualidade percebida pelos usuários.

## Variáveis de produção

Configure na Vercel, GitHub Actions ou no ambiente de deploy:

```env
VITE_SITE_URL=https://seudominio.com.br
VITE_GTM_ID=GTM-XXXXXXX
VITE_GOOGLE_SITE_VERIFICATION=token-do-search-console
VITE_ROBOTS_NOINDEX=false
```

`VITE_SITE_URL` é obrigatório para gerar `sitemap.xml`, canonical absoluto, `og:url` e dados estruturados com URLs completas. Use o domínio final, por exemplo `https://vozup.com.br`, sem barra no final.

Opcionais, mas recomendadas para dados estruturados:

```env
VITE_INSTAGRAM_URL=
VITE_GOOGLE_BUSINESS_URL=
VITE_LINKEDIN_URL=
```

Em ambientes de preview ou homologação, use:

```env
VITE_ROBOTS_NOINDEX=true
```

## Google Tag Manager

O site já envia eventos para `dataLayer`:

- `page_view`
- `generate_lead`
- `whatsapp_click`

No GTM, crie o container web e configure GA4, Google Ads e Meta Pixel a partir desses eventos. Se `VITE_GTM_ID` estiver definido, o build instala o snippet principal e o `<noscript>` automaticamente.

## Search Console

Depois do deploy:

1. Verifique a propriedade do domínio no Google Search Console.
2. Envie `https://seudominio.com.br/sitemap.xml`.
3. Teste `https://seudominio.com.br/robots.txt` e confirme que a home não está com `noindex`.
4. Use a inspeção de URL para pedir indexação da home.
5. Valide os dados estruturados no Rich Results Test.
6. Pesquise `site:seudominio.com.br` alguns dias depois para acompanhar a indexação.

## SEO local

Para melhorar presença em buscas como "curso de oratória no Tatuapé":

- mantenha nome, endereço e WhatsApp iguais no site e no Perfil da Empresa no Google;
- preencha `VITE_GOOGLE_BUSINESS_URL`;
- colete avaliações reais de alunos;
- publique fotos reais da unidade e dos treinamentos no Perfil da Empresa;
- crie páginas futuras para temas com demanda, como medo de falar em público, oratória para líderes e oratória para vendas.
- busque links reais de parceiros locais, associações, eventos, imprensa regional e fornecedores.
- mantenha a mesma grafia de nome, endereço e telefone em todos os canais públicos.

Referências oficiais:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://support.google.com/tagmanager/answer/14847097
