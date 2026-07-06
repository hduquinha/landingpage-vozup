import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGES = [1, 2, 3];

const Pagination = () => {
  const [page, setPage] = useState(1);

  return (
    <nav aria-label="Paginação" className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => setPage((current) => Math.max(1, current - 1))}
        disabled={page === 1}
        className="flex h-11 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 text-sm font-bold text-ink transition hover:border-[#0d94a4]/40 hover:bg-[#EAFBFC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink/10 disabled:hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Anterior</span>
      </button>

      {PAGES.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => setPage(n)}
          aria-current={page === n ? "page" : undefined}
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
            page === n
              ? "bg-[#00AFC1] text-white shadow-card"
              : "border border-ink/10 bg-white text-ink hover:border-[#0d94a4]/40 hover:bg-[#EAFBFC]"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => setPage((current) => Math.min(PAGES.length, current + 1))}
        disabled={page === PAGES.length}
        className="flex h-11 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 text-sm font-bold text-ink transition hover:border-[#0d94a4]/40 hover:bg-[#EAFBFC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink/10 disabled:hover:bg-white"
      >
        <span className="hidden sm:inline">Próximo</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

export default Pagination;
