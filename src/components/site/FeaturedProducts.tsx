import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { featuredItems, type MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/persian";

export function FeaturedProducts({ onSelect }: { onSelect: (item: MenuItem) => void }) {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <h2 className="display-title text-3xl sm:text-4xl">پیشنهادهای دیدار</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
              aria-label={`مشاهده جزئیات ${item.name}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl text-right"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                width={900}
                height={900}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-80"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-extrabold text-background transition-colors group-hover:text-primary">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-background/80">{formatPrice(item.price)}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
