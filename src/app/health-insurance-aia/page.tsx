import type { Metadata } from "next";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
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
        eyebrow="ประกันสุขภาพ"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ประกันสุขภาพ AIA", href: "/health-insurance-aia" },
        ]}
      />

      <PageSection variant="muted">
        <div className="mx-auto max-w-3xl content-prose">
          {HEALTH_INSURANCE_INTRO.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </PageSection>

      <PageSection variant="white" border="y">
        <SectionTitle subtitle="จุดเด่นที่ควรเลือกประกันสุขภาพ AIA">
          ทำไมต้องประกันสุขภาพ AIA
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HEALTH_BENEFITS.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection variant="muted">
        <SectionTitle subtitle="ผลิตภัณฑ์ประกันสุขภาพยอดนิยมจาก AIA">
          ผลิตภัณฑ์แนะนำ
        </SectionTitle>

        <div className="grid gap-4 lg:grid-cols-3">
          {HEALTH_PRODUCTS.map((product) => (
            <div key={product.name} className="card card-hover flex flex-col p-6">
              <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                {product.tag}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">
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
      </PageSection>

      <PageCTA
        title="ไม่แน่ใจว่าแผนไหนเหมาะกับคุณ?"
        description="เราช่วยเปรียบเทียบแผนประกันสุขภาพหลายระดับ ตามงบประมาณและความต้องการของครอบครัว"
        primary={{ label: "ปรึกษาฟรี", href: "/contact" }}
        secondary={{
          label: "บริการวางแผนสุขภาพ",
          href: "/product/health-planning",
        }}
      />
    </>
  );
}
