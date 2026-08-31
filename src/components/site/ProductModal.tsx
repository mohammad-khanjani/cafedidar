import { useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { categoryName } from "@/data/menu";
import { formatPrice } from "@/lib/persian";

export function ProductModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const last = useRef<MenuItem | null>(null);
  if (item) last.current = item;
  const data = item ?? last.current;

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <Dialog.Root open={!!item} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {item && data && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                dir="rtl"
                initial={{ opacity: 0, y: 48, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.98 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-x-0 bottom-0 z-[70] max-h-[92dvh] overflow-y-auto rounded-t-[2rem] border border-border bg-card p-0 shadow-lift sm:inset-x-auto sm:top-1/2 sm:left-1/2 sm:bottom-auto sm:max-h-[88dvh] sm:w-[min(40rem,92vw)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[2rem]"
              >
                <div
                  aria-hidden="true"
                  className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-border sm:hidden"
                />
                <div className="mt-3 overflow-hidden sm:mt-0 sm:rounded-t-[2rem]">
                  <img
                    src={data.image}
                    alt={data.name}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-56 w-full object-cover sm:h-72"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {categoryName[data.category]}
                  </span>
                  <Dialog.Title className="mt-4 text-2xl font-extrabold sm:text-3xl">
                    {data.name}
                  </Dialog.Title>
                  <p className="mt-3 leading-8 text-foreground/75">{data.description}</p>

                  <div className="mt-6">
                    <h3 className="text-sm font-bold text-muted-foreground">مواد تشکیل‌دهنده</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {data.ingredients.map((ing) => (
                        <li
                          key={ing}
                          className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground/80"
                        >
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="text-xl font-extrabold text-primary">
                      {formatPrice(data.price)}
                    </p>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary"
                      >
                        <X className="size-4" />
                        بستن
                      </button>
                    </Dialog.Close>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
