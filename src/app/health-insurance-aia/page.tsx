import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import {
  HEALTH_BENEFITS,
  HEALTH_INSURANCE_INTRO,
  HEALTH_PRODUCTS,
} from "@/lib/page-content";

export const metadata: Metadata = {
  title: "ประกันสุขภาพ AIA | AIA Khun Nan",
  description:
    "ประกันสุขภาพ AIA คุ้มครองค่ารักษาพยาบาล IPD OPD โรคร้ายแรง สำหรับทุกวัย ปรึกษาแผนที่เหมาะกับคุณฟรี",
};

export default function HealthInsurancePage() {
  return (
    <>
      <PageHero
        title={HEALTH_INSURANCE_INTRO.title}
        subtitle={HEALTH_INSURANCE_INTRO.subtitle}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ประกันสุขภาพ AIA", href: "/health-insurance-aia" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-text-muted">
            {HEALTH_INSURANCE_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="จุดเด่นที่ควรเลือกประกันสุขภาพ AIA">
            ทำไมต้องประกันสุขภาพ AIA
          </SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HEALTH_BENEFITS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary/15 bg-primary-light/30 p-6"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-[family-name:var(--font-prompt)] text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="ผลิตภัณฑ์ประกันสุขภาพยอดนิยมจาก AIA">
            ผลิตภัณฑ์แนะนำ
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-3">
            {HEALTH_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {product.tag}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="text-primary">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  ดูรายละเอียด →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-footer-light py-14 md:py-16">
        <div className="section-container text-center">
          <h2 className="font-[family-name:var(--font-prompt)] text-2xl font-semibold text-slate-900">
            ไม่แน่ใจว่าแผนไหนเหมาะกับคุณ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            เราช่วยเปรียบเทียบแผนประกันสุขภาพหลายระดับ ตามงบประมาณและความต้องการของครอบครัว
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">ปรึกษาฟรี</Button>
            <Link
              href="/product/health-planning"
              className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary-light"
            >
              บริการวางแผนสุขภาพ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
