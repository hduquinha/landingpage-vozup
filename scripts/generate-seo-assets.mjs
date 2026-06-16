import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const defaultProductionSiteUrl = "https://www.escolavozup.com";

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

const getVercelProductionUrl = (env) => {
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return normalizeUrl(env.VERCEL_PROJECT_PRODUCTION_URL);
  if (env.VERCEL_ENV === "production") return normalizeUrl(env.VERCEL_URL);
  return "";
};

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const fileEnv = [
  ".env",
  ".env.local",
  ".env.production",
  ".env.production.local",
].reduce((env, fileName) => ({ ...env, ...parseEnvFile(resolve(rootDir, fileName)) }), {});

const env = { ...fileEnv, ...process.env };
const configuredSiteUrl = env.VITE_SITE_URL || env.PUBLIC_SITE_URL || getVercelProductionUrl(env);
const siteUrl = normalizeUrl(configuredSiteUrl || defaultProductionSiteUrl);
const noindexSite = env.VITE_ROBOTS_NOINDEX === "true";

mkdirSync(distDir, { recursive: true });

if (noindexSite) {
  writeFileSync(
    resolve(distDir, "robots.txt"),
    `User-agent: *
Disallow: /
`,
    "utf8",
  );
  console.log("SEO: robots.txt gerado com bloqueio total porque VITE_ROBOTS_NOINDEX=true.");
  process.exit(0);
}

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(resolve(distDir, "robots.txt"), robots, "utf8");

if (!configuredSiteUrl) {
  console.warn(
    `SEO: VITE_SITE_URL nao definido; usando fallback de producao ${defaultProductionSiteUrl}.`,
  );
}

const lastmod = new Date().toISOString().slice(0, 10);
const homeUrl = `${siteUrl}/`;
const imageUrl = `${siteUrl}/og-vozup.jpg`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(homeUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>VozUP - Curso de oratória presencial no Tatuapé</image:title>
    </image:image>
  </url>
</urlset>
`;

writeFileSync(resolve(distDir, "sitemap.xml"), sitemap, "utf8");
console.log(`SEO: sitemap.xml e robots.txt gerados para ${siteUrl}`);
