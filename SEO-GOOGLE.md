# SEO e Google Tag Manager

Checklist para publicar a landing da VozUP com a base técnica correta para Google Search.

## Variáveis de produção

Configure na Vercel, GitHub Actions ou no ambiente de deploy:

```env
VITE_SITE_URL=https://seudominio.com.br
VITE_GTM_ID=GTM-XXXXXXX
VITE_GOOGLE_SITE_VERIFICATION=token-do-search-console
VITE_ROBOTS_NOINDEX=false
```

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
3. Teste `https://seudominio.com.br/robots.txt`.
4. Use a inspeção de URL para pedir indexação da home.
5. Valide os dados estruturados no Rich Results Test.

## SEO local

Para melhorar presença em buscas como "curso de oratória no Tatuapé":

- mantenha nome, endereço e WhatsApp iguais no site e no Perfil da Empresa no Google;
- preencha `VITE_GOOGLE_BUSINESS_URL`;
- colete avaliações reais de alunos;
- publique fotos reais da unidade e dos treinamentos no Perfil da Empresa;
- crie páginas futuras para temas com demanda, como medo de falar em público, oratória para líderes e oratória para vendas.

Referências oficiais:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://support.google.com/tagmanager/answer/14847097
