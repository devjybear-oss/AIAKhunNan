import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { STATS } from "@/lib/data";
import { AWARDS } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "รางวัลและผลงาน | AIA Khun Nan",
  description:
    "รางวัลและผลงานของทีมตัวแทนประกันชีวิต AIA รวมถึง MDRT และสถิติการดูแลลูกค้า",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="รางวัลและผลงาน"
        subtitle="ความไว้วางใจจากลูกค้าและมาตรฐานวิชาชีพระดับสากล"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "รางวัล", href: "/portfolio" },
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 text-white md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="section-container relative grid gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-heading text-2xl font-bold sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="ความสำเร็จที่สะท้อนคุณภาพการให้บริการ">
            รางวัลและความสำเร็จ
          </SectionTitle>

          <div className="mx-auto grid max-w-4xl gap-6">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-[family-name:var(--font-prompt)] text-sm font-bold text-white">
                  {award.year.slice(2, 4)}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {award.year}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-prompt)] text-lg font-semibold text-slate-900">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-footer-light py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-white p-8 text-center md:p-10">
            <h2 className="font-[family-name:var(--font-prompt)] text-xl font-semibold text-slate-900 md:text-2xl">
              MDRT คืออะไร?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
              Million Dollar Round Table (MDRT) เป็นองค์กรระดับโลกสำหรับตัวแทนประกันชีวิต
              ที่มีผลงานด้านการขายและการบริการโดดเด่น การได้รับรางวัล MDRT
              แสดงถึงมาตรฐานวิชาชีพสูงและความไว้วางใจจากลูกค้า
            </p>
            <div className="mt-8">
              <Button href="/contact">ปรึกษากับทีม MDRT</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
