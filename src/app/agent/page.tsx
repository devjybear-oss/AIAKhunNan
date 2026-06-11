import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
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
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "สมัครตัวแทน", href: "/agent" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center text-base leading-relaxed text-text-muted">
            <p>
              อาชีพตัวแทนประกันชีวิตไม่ใช่แค่การขาย แต่คือการเป็นที่ปรึกษาด้านการเงิน
              ที่ช่วยให้ครอบครัวไทยมีความมั่นคง หากคุณมองหาอาชีพที่ยืดหยุ่น มีรายได้ไม่จำกัด
              และต้องการพัฒนาตนเองอย่างต่อเนื่อง เรายินดีต้อนรับคุณเข้าสู่ทีม
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="เหตุผลที่ควรเริ่มต้นกับ AIA">
            ทำไมต้องเป็นตัวแทน AIA
          </SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AGENT_BENEFITS.map((item) => (
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
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle subtitle="คุณสมบัติเบื้องต้น" className="mb-6 text-left [&_div]:mx-0">
              คุณสมบัติผู้สมัคร
            </SectionTitle>
            <ul className="space-y-3">
              {AGENT_REQUIREMENTS.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm text-slate-700"
                >
                  <span className="mt-0.5 font-bold text-primary">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle subtitle="ขั้นตอนการสมัคร" className="mb-6 text-left [&_div]:mx-0">
              วิธีการสมัคร
            </SectionTitle>
            <div className="space-y-4">
              {AGENT_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-primary/15 bg-primary-light/30 p-5"
                >
                  <span className="font-[family-name:var(--font-prompt)] text-2xl font-bold text-primary/40">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-footer-light py-14 md:py-16">
        <div className="section-container text-center">
          <h2 className="font-[family-name:var(--font-prompt)] text-2xl font-semibold text-slate-900">
            สนใจสมัครตัวแทน?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            ติดต่อ {MAIN_CONTACT.name} เพื่อรับข้อมูลเพิ่มเติมและนัดสัมภาษณ์
          </p>
          <div className="mt-8">
            <Button href="/contact">ติดต่อสมัครตัวแทน</Button>
          </div>
        </div>
      </section>
    </>
  );
}
