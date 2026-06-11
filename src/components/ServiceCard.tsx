import Link from "next/link";
import type { PlanningService } from "@/lib/services";

type ServiceCardProps = {
  service: PlanningService;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/product/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
    >
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl">
        {service.icon}
      </span>

      <h3 className="font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900 transition group-hover:text-primary">
        {service.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{service.subtitle}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        ดูรายละเอียด
        <span className="transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
