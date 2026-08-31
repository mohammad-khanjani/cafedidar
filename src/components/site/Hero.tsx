import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { cafeInfo } from "@/data/menu";

export function Hero() {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const onScroll = () => setOffset(Math.min(window.scrollY, 600) * 0.08);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-28">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            منوی دیجیتال کافه
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="display-title text-5xl sm:text-6xl lg:text-7xl"
          >
            {cafeInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-4 text-xl font-semibold text-primary sm:text-2xl"
          >
            {cafeInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-5 max-w-md text-base leading-8 text-foreground/75 sm:text-lg"
          >
            منوی کافه دیدار را ببینید و طعم مورد علاقه‌تان را پیدا کنید.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease }}
            className="mt-9"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-primary"
            >
              مشاهده منو
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImage}
              alt="فضای گرم و مدرن کافه دیدار با یک فنجان قهوه روی میز چوبی"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
              style={{ transform: `translate3d(0, ${-offset}px, 0) scale(1.06)` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
