import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import SectionTitle from "@/components/SectionTitle";
import { MAIN_CONTACT } from "@/lib/data";
import {
  AGENT_BENEFITS,
  AGENT_REQUIREMENTS,
  AGENT_STEPS,
} from "@/lib/page-content";

export const metadata: Metadata = {
  title: "สมัครตัวแทนขายประกัน AIA | AIA Khun Nan",
  description:
    "สมัครเป็นตัวแทนประกันชีวิต AIA อาชีพที่สร้างรายได้และคุณค่า พร้อมทีมงานสนับสนุนตั้งแต่วันแรก",
};

export default function AgentPage() {
  return (
    <>
      <PageHero
        title="สมัครตัวแทนขายประกัน AIA"
        subtitle="เริ่มต้นอาชีพที่สร้างรายได้ สร้างคุณค่า และช่วยเหลือผู้คน พร้อมทีมงานที่พร้อมสนับสนุนคุณ"
        eyebrow="อาชีพ"
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "สมัครตัวแทน", href: "/agent" },
        ]}
      />

      <PageSection variant="muted">
        <div className="mx-auto max-w-3xl text-center content-prose">
          <p>
            อาชีพตัวแทนประกันชีวิตไม่ใช่แค่การขาย แต่คือการเป็นที่ปรึกษาด้านการเงิน
            ที่ช่วยให้ครอบครัวไทยมีความมั่นคง หากคุณมองหาอาชีพที่ยืดหยุ่น มีรายได้ไม่จำกัด
            และต้องการพัฒนาตนเองอย่างต่อเนื่อง เรายินดีต้อนรับคุณเข้าสู่ทีม
          </p>
        </div>
      </PageSection>

      <PageSection variant="white" border="y">
        <SectionTitle subtitle="เหตุผลที่ควรเริ่มต้นกับ AIA">
          ทำไมต้องเป็นตัวแทน AIA
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGENT_BENEFITS.map((item) => (
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              subtitle="คุณสมบัติเบื้องต้น"
              className="mb-6 text-left [&_p]:mx-0"
            >
              คุณสมบัติผู้สมัคร
            </SectionTitle>
            <ul className="space-y-3">
              {AGENT_REQUIREMENTS.map((req) => (
                <li
                  key={req}
                  className="card flex items-start gap-3 px-5 py-4 text-sm text-slate-700"
                >
                  <span className="mt-0.5 font-bold text-primary">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle
              subtitle="ขั้นตอนการสมัคร"
              className="mb-6 text-left [&_p]:mx-0"
            >
              วิธีการสมัคร
            </SectionTitle>
            <div className="space-y-4">
              {AGENT_STEPS.map((item) => (
                <div key={item.step} className="card flex gap-4 p-5">
                  <span className="font-heading text-2xl font-bold text-primary/30">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageCTA
        title="สนใจสมัครตัวแทน?"
        description={`ติดต่อ ${MAIN_CONTACT.name} เพื่อรับข้อมูลเพิ่มเติมและนัดสัมภาษณ์`}
        primary={{ label: "ติดต่อสมัครตัวแทน", href: "/contact" }}
      />
    </>
  );
}
