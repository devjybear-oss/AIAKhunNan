import { LINE_URL } from "@/lib/data";

export default function LineFloat() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-11 items-center gap-2 rounded-full border border-border bg-white px-3.5 text-xs font-medium text-success shadow-md transition hover:border-success/30 hover:shadow-lg sm:text-sm"
      aria-label="คุยทาง LINE"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-white">
        L
      </span>
      LINE
    </a>
  );
}
