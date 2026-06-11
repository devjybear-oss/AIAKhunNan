import { MAIN_CONTACT } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle="พร้อมให้คำปรึกษาและวางแผนประกันที่เหมาะกับคุณ">
          ติดต่อเรา
        </SectionTitle>

        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-xl shadow-slate-200/60 md:p-10">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-[family-name:var(--font-prompt)] text-2xl font-bold text-white">
                ศ
              </div>

              <h3 className="text-center text-xl font-semibold text-slate-900">
                {MAIN_CONTACT.name}
              </h3>
              <p className="mt-1 text-center text-sm text-text-muted">
                ตัวแทนประกันชีวิต · ที่ปรึกษาการเงิน
              </p>

              <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-text-muted">ใบอนุญาตตัวแทนประกันชีวิต</span>
                  <span className="font-medium text-slate-800">
                    {MAIN_CONTACT.license}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-text-muted">ทะเบียนผู้แนะนำการลงทุน</span>
                  <span className="font-medium text-slate-800">
                    {MAIN_CONTACT.investmentId}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-slate-50 px-4 py-3.5 text-sm text-text-muted">
                  <span>📞</span>
                  <span>โทร : {MAIN_CONTACT.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-slate-50 px-4 py-3.5 text-sm text-text-muted">
                  <span>💬</span>
                  <span>Line : {MAIN_CONTACT.line}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
