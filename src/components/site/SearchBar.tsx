import { Search, X } from "lucide-react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <label htmlFor="menu-search" className="sr-only">
        جستجو در منوی دیدار
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-5 size-5 -translate-y-1/2 text-muted-foreground"
      />
      <input
        id="menu-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو در منوی دیدار..."
        className="h-14 w-full rounded-full border border-border bg-card pr-14 pl-14 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="پاک کردن جستجو"
          className="absolute top-1/2 left-4 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
