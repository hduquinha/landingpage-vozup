import type { LucideIcon } from "lucide-react";

const PlaceholderImage = ({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) => (
  <div
    className={`relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAFBFC] to-[#D8F7FA] ${className}`}
  >
    <div className="absolute inset-0 bg-grid opacity-40" />
    <Icon className="relative h-10 w-10 text-[#0d94a4]/35" strokeWidth={1.5} />
  </div>
);

export default PlaceholderImage;
