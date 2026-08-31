import { Clock, MapPin, Phone, Share2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { cafeInfo } from "@/data/menu";

export function ContactSection() {
  const blocks = [
    { icon: MapPin, title: "آدرس", lines: [cafeInfo.address] },
    { icon: Clock, title: "ساعت کاری", lines: [cafeInfo.hours] },
    { icon: Phone, title: "شماره تماس", lines: [cafeInfo.phone] },
    {
      icon: Share2,
      title: "شبکه‌های اجتماعی",
      lines: cafeInfo.socials.map((s) => `${s.label}: ${s.value}`),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <h2 className="display-title text-3xl sm:text-4xl">تماس با ما</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <block.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold">{block.title}</h3>
                {block.lines.map((line) => (
                  <p key={line} className="mt-2 text-sm leading-7 text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
