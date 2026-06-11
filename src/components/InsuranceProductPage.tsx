import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { PRODUCTS } from "@/lib/data";
import type { InsuranceProduct } from "@/lib/insurance-products";

type InsuranceProductPageProps = {
  product: InsuranceProduct;
};

function getProductIcon(slug: string) {
  return PRODUCTS.find((item) => item.href === `/${slug}`)?.icon;
}

export default function InsuranceProductPage({
  product,
}: InsuranceProductPageProps) {
  const icon = getProductIcon(product.slug);

  return (
    <>
      <PageHero
        eyebrow="ผลิตภัณฑ์ AIA"
        title={product.title}
        subtitle={product.subtitle}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลิตภัณฑ์", href: "/#products" },
          { label: product.title, href: `/${product.slug}` },
        ]}
      />

      <section className="mesh-bg border-b border-border py-14 md:py-20">
        <div className="section-container">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-white p-7 shadow-sm md:p-9">
                <h2 className="font-heading text-xl font-bold text-slate-900 md:text-2xl">
                  ภาพรวม
                  <span className="gradient-text">ผลิตภัณฑ์</span>
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-text-muted">
                  {product.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-lg shadow-primary/10">
                  {icon && (
                    <div className="flex items-center justify-center bg-gradient-to-br from-primary-light/80 via-white to-white px-8 py-10">
                      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-md shadow-primary/10">
                        <Image
                          src={icon}
                          alt={product.title}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="border-t border-border p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      AIA Khun Nan
                    </p>
                    <p className="mt-2 font-heading text-lg font-semibold text-slate-900">
                      {product.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {product.subtitle}
                    </p>
                    <Button
                      href="/contact"
                      className="mt-5 w-full justify-center rounded-xl"
                    >
                      ปรึกษาแผนนี้
                    </Button>
                  </div>
                </div>

                {product.relatedService && (
                  <Link
                    href={product.relatedService.href}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 shadow-sm transition hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div>
                      <p className="text-xs font-medium text-text-muted">
                        บริการที่เกี่ยวข้อง
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold text-slate-900 group-hover:text-primary">
                        {product.relatedService.label}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="สิ่งที่ควรทราบก่อนตัดสินใจ">
            จุดเด่นที่ควรรู้
          </SectionTitle>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {product.highlights.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl border border-border bg-gradient-to-b from-white to-[#fffafb] p-6 transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 font-heading text-xs font-bold text-primary transition group-hover:bg-primary group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="border-b border-border bg-gradient-to-b from-[#fffafb] to-white py-14 md:py-16">
          <div className="section-container">
            <SectionTitle subtitle="แผนประกันอื่นที่อาจเหมาะกับคุณ">
              ผลิตภัณฑ์ที่เกี่ยวข้อง
            </SectionTitle>

            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {product.relatedProducts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div>
                    <p className="font-heading text-base font-semibold text-slate-900 group-hover:text-primary">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">
                      ดูรายละเอียดเพิ่มเติม
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 text-white md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_55%)]" />

        <div className="section-container relative text-center">
          <h2 className="font-heading text-xl font-bold sm:text-2xl">
            ไม่แน่ใจว่าแผนไหนเหมาะกับคุณ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            คุณแนน AIA ช่วยเปรียบเทียบแผนประกัน อธิบายเงื่อนไขสำคัญ
            และแนะนำแผนที่เหมาะกับงบประมาณของครอบครัว
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-white/95"
            >
              ปรึกษาฟรี
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              ดูผลิตภัณฑ์ทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
