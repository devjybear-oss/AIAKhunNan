import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentBlock from "@/components/ContentBlock";
import DetailPageLayout from "@/components/DetailPageLayout";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PillLink from "@/components/PillLink";
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
        eyebrow="บริการวางแผน"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "บริการ", href: "/product" },
          { label: service.title, href: `/product/${service.slug}` },
        ]}
      />

      <DetailPageLayout
        sidebar={{
          title: "สนใจบริการนี้?",
          description: "ปรึกษาฟรี ไม่มีค่าใช้จ่าย เราช่วยวิเคราะห์และออกแบบแผนตามเป้าหมายของคุณ",
          backLink: {
            label: "← กลับหน้าบริการทั้งหมด",
            href: "/product",
          },
        }}
      >
        <div className="card flex items-start gap-5 p-6 md:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-light text-3xl">
            {service.icon}
          </span>
          <p className="text-base leading-relaxed text-slate-700">
            {service.summary}
          </p>
        </div>

        <ContentBlock title="รายละเอียดบริการ">
          <div className="content-prose">
            {service.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="สิ่งที่คุณจะได้รับ">
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
        </ContentBlock>

        {service.relatedProducts && service.relatedProducts.length > 0 && (
          <ContentBlock title="ผลิตภัณฑ์ที่เกี่ยวข้อง" borderTop>
            <div className="flex flex-wrap gap-2">
              {service.relatedProducts.map((product) => (
                <PillLink key={product.href} href={product.href}>
                  {product.label}
                </PillLink>
              ))}
            </div>
          </ContentBlock>
        )}
      </DetailPageLayout>

      <PageCTA
        title="พร้อมเริ่มวางแผนแล้วหรือยัง?"
        description="ปรึกษาฟรี ไม่มีค่าใช้จ่าย เราพร้อมช่วยวิเคราะห์และเสนอแผนที่เหมาะกับคุณ"
        primary={{ label: "ปรึกษาบริการนี้", href: "/contact" }}
        secondary={{ label: "ดูบริการทั้งหมด", href: "/product" }}
      />
    </>
  );
}
