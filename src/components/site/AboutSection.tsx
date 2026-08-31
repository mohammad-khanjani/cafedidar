import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-5">
          <h2 className="display-title text-3xl sm:text-4xl">درباره کافه دیدار</h2>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
          <p className="text-base leading-9 text-foreground/75 sm:text-lg">
            کافه دیدار جایی برای مکث کردن، گفتگو کردن و لذت بردن از طعم‌های خوب است. ما هر روز با
            دانه‌های تازه، مواد اولیه مرغوب و کمی وسواس، فنجان‌ها و بشقاب‌هایی می‌سازیم که بهانه
            دیدارهای دوباره باشند.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
