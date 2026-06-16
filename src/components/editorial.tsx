import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Sistema visual editorial inspirado na apostila VozUP.
 * Componentes pequenos e reutilizáveis para manter consistência entre seções.
 */

/** Rótulo de seção: traço turquesa + texto em caixa alta com tracking. */
export const SectionLabel = ({
  children,
  className,
  tone = "teal",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "teal" | "light";
}) => (
  <p
    className={cn(
      "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]",
      tone === "teal" ? "text-[#0d94a4]" : "text-[#7BE7EF]",
      className,
    )}
  >
    <span
      className={cn(
        "h-px w-8",
        tone === "teal" ? "bg-[#0d94a4]" : "bg-[#7BE7EF]",
      )}
    />
    {children}
  </p>
);

/** Caixa de destaque estilo "PONTO CENTRAL / REFLEXÃO" da apostila. */
export const Callout = ({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-2xl border border-[#0d94a4]/15 bg-white/70 p-6 shadow-card backdrop-blur-sm sm:p-7",
      "border-l-4 border-l-[#00AFC1]",
      className,
    )}
  >
    <div className="mb-3 flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#0d94a4]">
      <Icon className="h-4 w-4" />
      {label}
    </div>
    <div className="text-base leading-relaxed text-slate-600">{children}</div>
  </div>
);

/** Badge numerado: quadrado escuro arredondado com número branco. */
export const NumberBadge = ({
  n,
  className,
}: {
  n: number | string;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white",
      className,
    )}
  >
    {typeof n === "number" ? String(n).padStart(2, "0") : n}
  </span>
);

/** Pílula/chip de tag, como os "Sons / Gestos" da apostila. */
export const Chip = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-[#0d94a4]/20 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm",
      className,
    )}
  >
    {children}
  </span>
);

/** Card de mídia com tratamento duotone teal + legenda no canto. */
export const MediaCard = ({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) => (
  <figure
    className={cn(
      "duotone relative overflow-hidden rounded-3xl shadow-lift",
      className,
    )}
  >
    <img src={src} alt={alt} className="h-full w-full object-cover" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062023]/70 via-transparent to-transparent" />
    {caption && (
      <figcaption className="absolute bottom-4 left-4 z-10 text-sm font-bold text-white drop-shadow">
        {caption}
      </figcaption>
    )}
  </figure>
);
