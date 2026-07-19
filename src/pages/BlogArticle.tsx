import { lazy, Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, FEATURED_POST, getCategoryIcon } from "@/lib/blogPosts";
import PlaceholderImage from "@/components/blog/PlaceholderImage";
import ArticleContent from "@/components/blog/ArticleContent";
import { MediaCard } from "@/components/editorial";

const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));

const vozupLogo = "/VozUP_vetor_fundo-claro.svg";

const ALL_POSTS = [FEATURED_POST, ...BLOG_POSTS];

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = ALL_POSTS.find((item) => item.id === slug);

  if (!post || !post.content) {
    return <Navigate to="/blog" replace />;
  }

  const Icon = getCategoryIcon(post.category);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-cream-deep px-4 pb-10 pt-6 text-ink sm:px-6 sm:pt-8">
        <div className="absolute inset-0 bg-grid opacity-50" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <header className="mb-8 flex flex-wrap items-center gap-3">
            <Link to="/" aria-label="Voltar para a página inicial da VozUP" className="flex-shrink-0">
              <img
                src={vozupLogo}
                alt="VozUP Escola de Oratória e Liderança Emocional"
                width={697}
                height={281}
                decoding="async"
                className="h-9 w-auto sm:h-[56px]"
              />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-3 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
              <span>Voltar para o blog</span>
            </Link>
          </header>

          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#EAFBFC] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0d94a4]">
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#0d94a4]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#0d94a4]" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {post.image ? (
        <section className="bg-white px-4 pt-2 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <MediaCard src={post.image.src} alt={post.image.alt} className="h-64 sm:h-80 lg:h-96" />
          </div>
        </section>
      ) : (
        <PlaceholderImage icon={Icon} className="h-56 w-full sm:h-72" />
      )}

      <article className="bg-white px-4 py-12 text-ink sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <ArticleContent blocks={post.content} />
        </div>
      </article>

      <Suspense fallback={null}>
        <FinalCtaSection />
      </Suspense>
    </div>
  );
};

export default BlogArticle;
