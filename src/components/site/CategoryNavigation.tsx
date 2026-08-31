import { motion } from "motion/react";
import { categories, type Category } from "@/data/menu";

export function CategoryNavigation({
  active,
  onChange,
}: {
  active: Category["id"];
  onChange: (id: Category["id"]) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="دسته‌بندی‌های منو"
      className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {categories.map((cat) => {
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`relative shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              isActive
                ? "border-primary text-primary-foreground"
                : "border-border text-foreground/70 hover:border-primary/50 hover:text-primary"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-category"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-full bg-primary"
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
