import { lazy, Suspense } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearchBar from "@/components/blog/BlogSearchBar";

const BlogCategories = lazy(() => import("@/components/blog/BlogCategories"));
const FeaturedArticle = lazy(() => import("@/components/blog/FeaturedArticle"));
const ArticleList = lazy(() => import("@/components/blog/ArticleList"));
const Newsletter = lazy(() => import("@/components/blog/Newsletter"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));

const Blog = () => {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogSearchBar />
      <Suspense fallback={null}>
        <BlogCategories />
        <FeaturedArticle />
        <ArticleList />
        <Newsletter />
        <FinalCtaSection />
      </Suspense>
    </div>
  );
};

export default Blog;
