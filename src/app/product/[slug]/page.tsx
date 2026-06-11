import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import {
  PLANNING_SERVICES,
  getServiceBySlug,
} from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PLANNING_SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "ไม่พบหน้า | AIA Khun Nan" };

  return {
    title: `${service.title} | AIA Khun Nan`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "บริการ", href: "/product" },
          { label: service.title, href: `/product/${service.slug}` },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-10">
            <div className="flex items-start gap-5 rounded-2xl border border-primary/15 bg-primary-light/30 p-6 md:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {service.icon}
              </span>
              <p className="text-base leading-relaxed text-slate-700">
                {service.summary}
              </p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-text-muted">
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <h2 className="mb-4 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                สิ่งที่คุณจะได้รับ
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {service.relatedProducts && service.relatedProducts.length > 0 && (
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                  ผลิตภัณฑ์ที่เกี่ยวข้อง
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.relatedProducts.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="rounded-full border border-primary/25 bg-primary-light/50 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 border-t border-border pt-8">
              <Button href="/#contact">ปรึกษาบริการนี้</Button>
              <Link
                href="/product"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:text-primary"
              >
                ← กลับหน้าบริการทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
