import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/site/IntroSection";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { MenuSection } from "@/components/site/MenuSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { ProductModal } from "@/components/site/ProductModal";
import type { MenuItem } from "@/data/menu";

const title = "کافه دیدار | منوی کافه";
const description = "منوی دیجیتال کافه دیدار؛ مشاهده صبحانه، قهوه، نوشیدنی، دسر و میان‌وعده.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "کافه دیدار",
          slogan: "طعم خوب، حال خوب",
          description,
          servesCuisine: "کافه",
          telephone: "021-12345678",
          address: {
            "@type": "PostalAddress",
            streetAddress: "خیابان ولیعصر، نبش کوچه دیدار، پلاک ۱۲",
            addressLocality: "تهران",
            addressCountry: "IR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:right-3 focus:z-[80] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        رفتن به منو
      </a>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <FeaturedProducts onSelect={setSelected} />
        <MenuSection onSelect={setSelected} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
