import { LINE_URL } from "@/lib/data";

export default function LineFloat() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-success px-5 py-3 font-[family-name:var(--font-prompt)] text-sm font-medium text-white shadow-lg transition hover:scale-105"
    >
      คุยกับที่ปรึกษา
    </a>
  );
}
