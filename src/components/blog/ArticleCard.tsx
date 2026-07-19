import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getCategoryIcon, type BlogPost } from "@/lib/blogPosts";
import PlaceholderImage from "@/components/blog/PlaceholderImage";

const ArticleCard = ({ post }: { post: BlogPost }) => {
  const Icon = getCategoryIcon(post.category);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <PlaceholderImage icon={Icon} className="h-44 w-full" />

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#EAFBFC] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0d94a4] transition group-hover:bg-[#00AFC1] group-hover:text-white">
          {post.category}
        </span>
        <h3 className="text-lg font-extrabold leading-tight">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4">
          <div className="flex flex-col gap-1 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          {post.content ? (
            <Link
              to={`/blog/${post.id}`}
              className="flex flex-shrink-0 items-center gap-1.5 text-sm font-bold text-[#0d94a4] transition group-hover:gap-2.5"
            >
              Ler artigo
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              type="button"
              className="flex flex-shrink-0 items-center gap-1.5 text-sm font-bold text-[#0d94a4] transition group-hover:gap-2.5"
            >
              Ler artigo
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
