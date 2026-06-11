import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import type { InsuranceProduct } from "@/lib/insurance-products";

type InsuranceProductPageProps = {
  product: InsuranceProduct;
};

export default function InsuranceProductPage({
  product,
}: InsuranceProductPageProps) {
  return (
    <>
      <PageHero
        title={product.title}
        subtitle={product.subtitle}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลิตภัณฑ์", href: "/#products" },
          { label: product.title, href: `/${product.slug}` },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-10">
            <div className="space-y-5 text-base leading-relaxed text-text-muted">
              {product.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <h2 className="mb-4 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                จุดเด่นที่ควรรู้
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.highlights.map((item) => (
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

            {product.relatedProducts && product.relatedProducts.length > 0 && (
              <div>
                <h2 className="mb-4 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                  ผลิตภัณฑ์ที่เกี่ยวข้อง
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.relatedProducts.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-primary/25 bg-primary-light/50 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 border-t border-border pt-8">
              <Button href="/contact">ปรึกษาแผนนี้</Button>
              {product.relatedService && (
                <Link
                  href={product.relatedService.href}
                  className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary-light"
                >
                  {product.relatedService.label}
                </Link>
              )}
              <Link
                href="/#products"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:text-primary"
              >
                ← กลับหน้าผลิตภัณฑ์
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
