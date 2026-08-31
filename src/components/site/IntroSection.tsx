import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section className="border-y border-border/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <Reveal className="lg:col-span-7">
          <h2 className="display-title text-3xl leading-[1.5] sm:text-4xl lg:text-5xl lg:leading-[1.45]">
            اینجا، هر دیدار یک طعم تازه دارد.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="text-base leading-9 text-foreground/70 sm:text-lg">
            از قهوه صبحگاهی تا دسرهای عصرانه، انتخابت را از منوی دیدار پیدا کن.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
