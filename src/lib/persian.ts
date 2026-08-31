const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)] ?? d);
}

/** ۲۸۰٬۰۰۰ تومان */
export function formatPrice(price: number): string {
  const grouped = price.toLocaleString("en-US").replace(/,/g, "٬");
  return `${toPersianDigits(grouped)} تومان`;
}

/** Normalizes Persian/Arabic characters and digits for search matching. */
export function normalize(text: string): string {
  return text
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[ـآأإٱ]/g, (c) => (c === "ـ" ? "" : "ا"))
    .replace(/[\u064B-\u0652\u200c]/g, " ")
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
