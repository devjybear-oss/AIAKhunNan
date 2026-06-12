import Link from "next/link";
import Button from "@/components/Button";
import { LINE_URL } from "@/lib/data";

type SidebarCTAProps = {
  title?: string;
  description?: string;
  relatedLink?: { label: string; href: string };
  backLink?: { label: string; href: string };
};

export default function SidebarCTA({
  title = "สนใจแผนนี้?",
  description = "ปรึกษาฟรี ไม่มีค่าใช้จ่าย ช่วยเปรียบเทียบแผนที่เหมาะกับคุณ",
  relatedLink,
  backLink,
}: SidebarCTAProps) {
  return (
    <aside className="lg:sticky lg:top-20 lg:self-start">
      <div className="card p-5">
        <p className="font-heading text-sm font-semibold text-slate-900">
          {title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-text-muted">
          {description}
        </p>
        <div className="mt-4 space-y-2">
          <Button
            href={LINE_URL}
            variant="success"
            external
            className="w-full justify-center"
          >
            คุยทาง LINE
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="w-full justify-center"
          >
            ติดต่อเรา
          </Button>
        </div>
        {relatedLink && (
          <Link
            href={relatedLink.href}
            className="mt-4 block text-center text-xs text-primary hover:underline"
          >
            {relatedLink.label} →
          </Link>
        )}
      </div>
      {backLink && (
        <Link
          href={backLink.href}
          className="mt-3 block text-center text-xs text-text-muted hover:text-primary"
        >
          {backLink.label}
        </Link>
      )}
    </aside>
  );
}
