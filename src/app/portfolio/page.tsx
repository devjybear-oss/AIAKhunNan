import type { Metadata } from "next";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import SectionTitle from "@/components/SectionTitle";
import StatsSection from "@/components/StatsSection";
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
        eyebrow="รางวัล"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "รางวัล", href: "/portfolio" },
        ]}
      />

      <StatsSection />

      <PageSection variant="muted">
        <SectionTitle subtitle="ความสำเร็จที่สะท้อนคุณภาพการให้บริการ">
          รางวัลและความสำเร็จ
        </SectionTitle>

        <div className="mx-auto grid max-w-4xl gap-4">
          {AWARDS.map((award) => (
            <div key={award.title} className="card flex gap-5 p-6 md:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-white">
                {award.year.slice(2, 4)}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {award.year}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-slate-900">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="MDRT คืออะไร?"
        description="Million Dollar Round Table (MDRT) เป็นองค์กรระดับโลกสำหรับตัวแทนประกันชีวิตที่มีผลงานด้านการขายและการบริการโดดเด่น การได้รับรางวัล MDRT แสดงถึงมาตรฐานวิชาชีพสูงและความไว้วางใจจากลูกค้า"
        primary={{ label: "ปรึกษากับทีม MDRT", href: "/contact" }}
      />
    </>
  );
}
