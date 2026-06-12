import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { MAIN_CONTACT } from "@/lib/data";
import { PLANNING_SERVICES, SERVICE_PROCESS } from "@/lib/services";

export const metadata: Metadata = {
  title: "บริการวางแผนประกัน | AIA Khun Nan",
  description:
    "บริการวางแผนประกันชีวิต ประกันสุขภาพ ลดหย่อนภาษี เกษียณ และการเงินส่วนบุคคล โดยตัวแทนประกันชีวิต AIA",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        title="บริการวางแผนประกันและการเงิน"
        subtitle={`${MAIN_CONTACT.name} พร้อมให้คำปรึกษาและออกแบบแผนประกันที่เหมาะกับเป้าหมายและงบประมาณของคุณ`}
        eyebrow="บริการ"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "บริการ", href: "/product" },
        ]}
      />

      <PageSection variant="muted">
        <div className="mx-auto max-w-3xl text-center content-prose">
          <p>
            การเลือกประกันไม่ใช่แค่การซื้อกรมธรรม์ แต่คือการวางแผนป้องกันความเสี่ยง
            และสร้างความมั่นคงทางการเงินระยะยาว เราให้บริการวิเคราะห์อย่างเป็นระบบ
            เพื่อให้คุณมั่นใจว่าทุกบาทที่จ่ายเบี้ยประกัน นำไปสู่เป้าหมายที่วางไว้จริง
          </p>
        </div>
      </PageSection>

      <PageSection variant="white" border="y">
        <SectionTitle subtitle="เลือกบริการที่ตรงกับเป้าหมายของคุณ">
          บริการที่เรามี
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANNING_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </PageSection>

      <PageSection variant="muted">
        <SectionTitle subtitle="กระบวนการให้บริการอย่างเป็นมืออาชีพ">
          ขั้นตอนการให้บริการ
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_PROCESS.map((item) => (
            <FeatureCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="พร้อมเริ่มวางแผนแล้วหรือยัง?"
        description="ปรึกษาฟรี ไม่มีค่าใช้จ่าย เราพร้อมช่วยวิเคราะห์และเสนอแผนที่เหมาะกับคุณ"
        primary={{ label: "นัดปรึกษา", href: "/contact" }}
        secondary={{ label: "ดูผลิตภัณฑ์", href: "/#products" }}
      />
    </>
  );
}
