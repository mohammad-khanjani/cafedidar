import { motion } from "motion/react";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/persian";

export function MenuCard({
  item,
  onSelect,
  large = false,
}: {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  large?: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={large ? "sm:col-span-2" : undefined}
    >
      <button
        type="button"
        onClick={() => onSelect(item)}
        aria-label={`مشاهده جزئیات ${item.name}`}
        className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-right transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift"
      >
        <div className={`overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            width={900}
            height={900}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3
            className={`font-bold transition-colors group-hover:text-primary ${
              large ? "text-2xl" : "text-lg"
            }`}
          >
            {item.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-7 text-muted-foreground">
            {item.description}
          </p>
          <p className="mt-auto pt-3 text-sm font-bold text-foreground">
            {formatPrice(item.price)}
          </p>
        </div>
      </button>
    </motion.article>
  );
}
