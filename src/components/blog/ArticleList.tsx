import { BLOG_POSTS } from "@/lib/blogPosts";
import { SectionLabel } from "@/components/editorial";
import ArticleCard from "@/components/blog/ArticleCard";
import Pagination from "@/components/blog/Pagination";

const ArticleList = () => (
  <section className="bg-white px-4 py-14 text-ink sm:px-6 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionLabel className="mb-8 justify-center sm:justify-start">Todos os artigos</SectionLabel>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination />
    </div>
  </section>
);

export default ArticleList;
