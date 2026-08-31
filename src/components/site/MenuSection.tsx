import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CategoryNavigation } from "./CategoryNavigation";
import { SearchBar } from "./SearchBar";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { categoryName, menuItems, type Category, type MenuItem } from "@/data/menu";
import { normalize, toPersianDigits } from "@/lib/persian";

export function MenuSection({ onSelect }: { onSelect: (item: MenuItem) => void }) {
  const [active, setActive] = useState<Category["id"]>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query);
    return menuItems.filter((item) => {
      if (active !== "all" && item.category !== active) return false;
      if (!q) return true;
      const haystack = normalize(
        [item.name, item.description, item.ingredients.join(" "), categoryName[item.category]].join(
          " ",
        ),
      );
      return q.split(" ").every((part) => haystack.includes(part));
    });
  }, [active, query]);

  return (
    <section id="menu" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">منوی کافه دیدار</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            انتخابی برای هر سلیقه و هر لحظه
          </p>
        </Reveal>

        <div className="sticky top-16 z-40 -mx-5 mt-8 bg-background/90 px-5 py-4 backdrop-blur-xl sm:top-20 sm:mx-0 sm:rounded-3xl sm:px-6">
          <SearchBar value={query} onChange={setQuery} />
          <div className="mt-4">
            <CategoryNavigation active={active} onChange={setActive} />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {toPersianDigits(results.length)} مورد
        </p>

        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {results.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                onSelect={onSelect}
                large={!query && active === "all" && index === 0}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {results.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl border border-dashed border-border py-20 text-center"
            >
              <p className="text-xl font-bold">موردی پیدا نشد</p>
              <p className="mt-2 text-muted-foreground">عبارت دیگری را امتحان کنید.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
