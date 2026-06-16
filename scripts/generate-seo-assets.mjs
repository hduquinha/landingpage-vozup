import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");

const parseEnvFile = (filePath) => {
  if (!existsSync(filePath)) return {};

  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((env, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return env;

      const match = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/i);
      if (!match) return env;

      const [, key, rawValue] = match;
      env[key] = rawValue.replace(/^['"]|['"]$/g, "").trim();
      return env;
    }, {});
};

const normalizeUrl = (url) => {
  const value = url?.trim();
  if (!value) return "";

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
};

const fileEnv = [
  ".env",
  ".env.local",
  ".env.production",
  ".env.production.local",
].reduce((env, fileName) => ({ ...env, ...parseEnvFile(resolve(rootDir, fileName)) }), {});

const env = { ...fileEnv, ...process.env };
const siteUrl = normalizeUrl(
  env.VITE_SITE_URL || env.PUBLIC_SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL,
);

mkdirSync(distDir, { recursive: true });

const robots = siteUrl
  ? `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
  : `User-agent: *
Allow: /

# Defina VITE_SITE_URL para gerar a linha Sitemap em produção.
`;

writeFileSync(resolve(distDir, "robots.txt"), robots, "utf8");

if (!siteUrl) {
  console.warn("SEO: VITE_SITE_URL não definido; sitemap.xml não foi gerado.");
  process.exit(0);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

writeFileSync(resolve(distDir, "sitemap.xml"), sitemap, "utf8");
console.log(`SEO: sitemap.xml e robots.txt gerados para ${siteUrl}`);
