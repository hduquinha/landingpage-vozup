import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

const BlogSearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-white px-4 pb-6 pt-14 sm:px-6 sm:pt-20">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-2xl items-center gap-2 rounded-full border border-gray-200 bg-cream/50 p-2 shadow-card transition focus-within:border-[#00AFC1] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#00AFC1]/20 sm:gap-3"
      >
        <Search className="ml-3 h-5 w-5 flex-shrink-0 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          placeholder="Buscar artigos sobre oratória, liderança, comunicação..."
          className="h-10 w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400 sm:h-11 sm:text-base"
        />
        <button
          type="submit"
          className="flex h-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-5 text-sm font-bold text-white shadow-lift transition hover:bg-ink sm:h-11 sm:px-6"
        >
          <Search className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">Buscar</span>
        </button>
      </form>
    </section>
  );
};

export default BlogSearchBar;
