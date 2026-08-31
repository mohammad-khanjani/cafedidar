import { cafeInfo } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-extrabold">{cafeInfo.name}</p>
          <p className="mt-1 text-sm text-background/70">{cafeInfo.tagline}</p>
        </div>
        <nav aria-label="ناوبری پاورقی">
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            <li>
              <a href="#about" className="text-background/80 hover:text-primary">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#menu" className="text-background/80 hover:text-primary">
                منو
              </a>
            </li>
            <li>
              <a href="#contact" className="text-background/80 hover:text-primary">
                تماس
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
