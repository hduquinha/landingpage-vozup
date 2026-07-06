import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import {
  absoluteUrl,
  buildHomeStructuredData,
  getCanonicalUrl,
  getIndexRobots,
  getRouteSeo,
  homeSeo,
  siteName,
  type RouteSeo,
} from "@/lib/seo";
import { getProfileByRoute } from "@/lib/landingPages";
import { defaultLandingPageContent } from "@/lib/landingPageContent";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

const upsertCanonical = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = "canonical";
    document.head.appendChild(tag);
  }

  tag.href = href;
};

const upsertStructuredData = (id: string, data: unknown) => {
  let tag = document.getElementById(id) as HTMLScriptElement | null;

  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }

  tag.text = JSON.stringify(data);
};

const removeStructuredData = (id: string) => {
  document.getElementById(id)?.remove();
};

const SeoManager = () => {
  const location = useLocation();
  const lastTrackedPath = useRef("");

  useEffect(() => {
    const profile = getProfileByRoute(location.pathname);
    const routeSeo: RouteSeo = profile
      ? {
          title: (profile.content ?? defaultLandingPageContent).seo.title,
          description: (profile.content ?? defaultLandingPageContent).seo.description,
          canonical: getCanonicalUrl(location.pathname),
          robots: getIndexRobots(),
        }
      : getRouteSeo(location.pathname);
    const imagePath = routeSeo.imagePath || homeSeo.imagePath;
    const imageUrl = absoluteUrl(imagePath);
    const isSocialPreviewImage = imagePath === homeSeo.imagePath;
    const pagePath = `${location.pathname}${location.search}`;

    document.title = routeSeo.title;

    upsertMeta("name", "description", routeSeo.description);
    upsertMeta("name", "robots", routeSeo.robots);
    upsertMeta("name", "author", siteName);
    upsertMeta("property", "og:title", routeSeo.title);
    upsertMeta("property", "og:description", routeSeo.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", routeSeo.canonical);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:type", isSocialPreviewImage ? "image/jpeg" : "image/png");
    upsertMeta("property", "og:image:width", isSocialPreviewImage ? "1200" : "697");
    upsertMeta("property", "og:image:height", isSocialPreviewImage ? "630" : "281");
    upsertMeta("property", "og:image:alt", "VozUP - Curso de oratória presencial no Tatuapé");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", routeSeo.title);
    upsertMeta("name", "twitter:description", routeSeo.description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", "VozUP - Curso de oratória presencial no Tatuapé");
    upsertCanonical(routeSeo.canonical);

    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
    if (verification) {
      upsertMeta("name", "google-site-verification", verification);
    }

    if (location.pathname === "/") {
      upsertStructuredData("vozup-structured-data", buildHomeStructuredData());
    } else {
      removeStructuredData("vozup-structured-data");
    }

    if (lastTrackedPath.current !== pagePath) {
      trackPageView(routeSeo.title, pagePath);
      lastTrackedPath.current = pagePath;
    }
  }, [location.pathname, location.search]);

  return null;
};

export default SeoManager;
