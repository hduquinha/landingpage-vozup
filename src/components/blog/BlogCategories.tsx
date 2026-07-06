import { useState } from "react";
import { BLOG_CATEGORIES } from "@/lib/blogPosts";

const BlogCategories = () => {
  const [active, setActive] = useState(BLOG_CATEGORIES[0].label);

  return (
    <section className="bg-white px-4 pb-14 pt-2 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {BLOG_CATEGORIES.map((category) => {
            const isActive = category.label === active;

            return (
              <button
                key={category.label}
                type="button"
                onClick={() => setActive(category.label)}
                className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#00AFC1] bg-[#00AFC1] text-white shadow-card"
                    : "border-[#0d94a4]/15 bg-white text-ink hover:border-[#0d94a4]/40 hover:bg-[#EAFBFC]"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
