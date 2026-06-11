import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
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
      />

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center text-base leading-relaxed text-text-muted">
            <p>
              การเลือกประกันไม่ใช่แค่การซื้อกรมธรรม์ แต่คือการวางแผนป้องกันความเสี่ยง
              และสร้างความมั่นคงทางการเงินระยะยาว เราให้บริการวิเคราะห์อย่างเป็นระบบ
              เพื่อให้คุณมั่นใจว่าทุกบาทที่จ่ายเบี้ยประกัน นำไปสู่เป้าหมายที่วางไว้จริง
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="เลือกบริการที่ตรงกับเป้าหมายของคุณ">
            บริการที่เรามี
          </SectionTitle>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLANNING_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="section-container">
          <SectionTitle subtitle="กระบวนการให้บริการอย่างเป็นมืออาชีพ">
            ขั้นตอนการให้บริการ
          </SectionTitle>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-primary/15 bg-primary-light/30 p-6"
              >
                <span className="font-[family-name:var(--font-prompt)] text-3xl font-bold text-primary/40">
                  {item.step}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-prompt)] text-base font-semibold text-slate-900">
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

      <section className="border-t border-border bg-footer-light py-14 md:py-16">
        <div className="section-container text-center">
          <h2 className="font-[family-name:var(--font-prompt)] text-2xl font-semibold text-slate-900 md:text-3xl">
            พร้อมเริ่มวางแผนแล้วหรือยัง?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย เราพร้อมช่วยวิเคราะห์และเสนอแผนที่เหมาะกับคุณ
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">นัดปรึกษา</Button>
            <Link
              href="/#products"
              className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary-light"
            >
              ดูผลิตภัณฑ์
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
