import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { MAIN_CONTACT } from "@/lib/data";
import { CONTACT_FAQ, CONTACT_INFO } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "ติดต่อเรา | AIA Khun Nan",
  description:
    "ติดต่อคุณ ศศิวิมล อนันทชาติวงศ์ ตัวแทนประกันชีวิต AIA ปรึกษาประกันสุขภาพและประกันชีวิตฟรี",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={CONTACT_INFO.title}
        subtitle={CONTACT_INFO.subtitle}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ติดต่อเรา", href: "/contact" },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <ContactCard />

            <div className="mt-6 rounded-2xl border border-border bg-white p-6">
              <h3 className="font-[family-name:var(--font-prompt)] text-base font-semibold text-slate-900">
                เวลาให้บริการ
              </h3>
              <p className="mt-2 text-sm text-text-muted">{CONTACT_INFO.hours}</p>
              <p className="mt-1 text-sm text-text-muted">{CONTACT_INFO.note}</p>
            </div>
          </div>

          <div>
            <SectionTitle subtitle="ข้อมูลที่มักถูกถาม" className="mb-8 text-left [&_div]:mx-0">
              คำถามที่พบบ่อย
            </SectionTitle>

            <div className="space-y-4">
              {CONTACT_FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-light/30 p-6">
              <h3 className="font-[family-name:var(--font-prompt)] text-base font-semibold text-slate-900">
                บริการที่ปรึกษาได้
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· ประกันสุขภาพและประกันชีวิต AIA</li>
                <li>· วางแผนลดหย่อนภาษีและเกษียณ</li>
                <li>· วางแผนกองทุนการศึกษาลูก</li>
                <li>· สมัครเป็นตัวแทนประกันชีวิต AIA</li>
              </ul>
              <p className="mt-4 text-sm text-text-muted">
                ตัวแทน : {MAIN_CONTACT.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
