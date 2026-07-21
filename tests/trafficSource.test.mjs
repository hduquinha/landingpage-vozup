import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const sourceUrl = new URL("../src/lib/trafficSource.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
  fileName: sourceUrl.pathname,
});
const sourceModuleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
const { classifyTrafficChannel, getTrafficSource } = await import(sourceModuleUrl);

test("caso Thamires: Instagram link in bio continua orgânico mesmo com fbclid", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "instagram",
      utmMedium: "social",
      utmContent: "link_in_bio",
      fbclid: "IwZXh0bgNhZW0CMTEAAR",
    }),
    "organico",
  );
});

test("Facebook orgânico com medium social não vira Meta Ads", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "facebook",
      utmMedium: "social",
      utmContent: "perfil",
      fbclid: "organic-click-id",
    }),
    "organico",
  );
});

test("fbclid isolado não é prova de Meta Ads", () => {
  assert.equal(classifyTrafficChannel({ fbclid: "organic-click-id" }), "organico");
});

test("campanha paga atual facebookads/cpc continua Meta Ads", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "facebookads",
      utmMedium: "cpc",
      utmContent: "VOZUP_AD06_IMG_AUTO",
      fbclid: "paid-click-id",
    }),
    "meta",
  );
});

test("fonte Meta com meio pago e fbclid continua Meta Ads", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "facebook",
      utmMedium: "paid_social",
      utmContent: "VOZUP_AD18_IMG_AUTO",
      fbclid: "paid-click-id",
    }),
    "meta",
  );
});

test("fonte explicitamente facebook_ads continua Meta mesmo sem fbclid", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "facebook_ads",
      utmMedium: "cpc",
      utmContent: "criativo-01",
    }),
    "meta",
  );
});

test("fonte explicitamente publicitária vence sinais orgânicos conflitantes", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "facebookads",
      utmMedium: "social",
      utmContent: "link_in_bio",
      fbclid: "paid-click-id",
    }),
    "meta",
  );
});

test("meio pago vence link_in_bio quando a fonte é Meta", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "ig",
      utmMedium: "cpc",
      utmContent: "link_in_bio",
      fbclid: "paid-click-id",
    }),
    "meta",
  );
});

test("vocabulário pago alternativo permanece alinhado com o servidor", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "ig",
      utmMedium: "cpm",
      fbclid: "paid-click-id",
    }),
    "meta",
  );
});

test("Google Ads: clique com gclid é tráfego pago", () => {
  assert.equal(
    classifyTrafficChannel({
      utmSource: "google",
      utmMedium: "cpc",
      gclid: "Cj0KCQjw-paid-click",
    }),
    "google-ads",
  );
});

test("Google Ads: gclid sozinho já prova mídia paga do Google", () => {
  assert.equal(classifyTrafficChannel({ gclid: "Cj0KCQjw-paid-click" }), "google-ads");
});

test("Google Ads: fonte google + meio pago (sem gclid) continua pago", () => {
  assert.equal(
    classifyTrafficChannel({ utmSource: "google", utmMedium: "cpc" }),
    "google-ads",
  );
});

test("Google orgânico: busca google sem gclid/meio pago é orgânico, não Ads", () => {
  assert.equal(
    classifyTrafficChannel({ utmSource: "google", utmMedium: "organic" }),
    "organico",
  );
});

test("Google orgânico: utm_source=google isolado não infla Google Ads", () => {
  assert.equal(classifyTrafficChannel({ utmSource: "google" }), "organico");
});

test("getTrafficSource aplica a regra completa às UTMs da URL", () => {
  const previousWindow = globalThis.window;
  const previousSessionStorage = globalThis.sessionStorage;
  const storage = new Map();

  globalThis.window = {
    location: {
      search: "?utm_source=instagram&utm_medium=social&utm_content=link_in_bio&fbclid=organic-click-id",
    },
  };
  globalThis.sessionStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };

  try {
    assert.equal(getTrafficSource().channel, "organico");
  } finally {
    globalThis.window = previousWindow;
    globalThis.sessionStorage = previousSessionStorage;
  }
});

test("origem persistida por versão antiga é reclassificada ao ser lida", () => {
  const previousWindow = globalThis.window;
  const previousSessionStorage = globalThis.sessionStorage;
  const storage = new Map([
    [
      "vozup_traffic_source",
      JSON.stringify({
        channel: "meta",
        utmSource: "instagram",
        utmMedium: "social",
        utmCampaign: null,
        utmContent: "link_in_bio",
        utmTerm: null,
        gclid: null,
        fbclid: "organic-click-id",
      }),
    ],
  ]);

  globalThis.window = { location: { search: "" } };
  globalThis.sessionStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };

  try {
    assert.equal(getTrafficSource().channel, "organico");
    assert.equal(JSON.parse(storage.get("vozup_traffic_source")).channel, "organico");
  } finally {
    globalThis.window = previousWindow;
    globalThis.sessionStorage = previousSessionStorage;
  }
});
