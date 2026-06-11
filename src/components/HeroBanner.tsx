import Image from "next/image";
import Link from "next/link";
import { MAIN_CONTACT } from "@/lib/data";

const HIGHLIGHTS = [
  { value: "500+", label: "ครอบครัวที่ดูแล" },
  { value: "MDRT", label: "ตัวแทนมืออาชีพ" },
  { value: "ฟรี", label: "ปรึกษาไม่มีค่าใช้จ่าย" },
] as const;

export default function HeroBanner() {
  return (
    <section className="mesh-bg relative border-b border-border">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

      <div className="section-container relative grid items-center gap-8 py-12 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ตัวแทนประกันชีวิต AIA อย่างมืออาชีพ
          </span>

          <h1 className="mt-5 text-[1.75rem] font-semibold leading-snug text-slate-900 sm:text-3xl md:text-[2rem] lg:text-[2.25rem]">
            วางแผนประกัน
            <span className="gradient-text block">เพื่ออนาคตที่มั่นคง</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            {MAIN_CONTACT.name} พร้อมให้คำปรึกษาด้านประกันชีวิตและประกันสุขภาพ
            ด้วยผลิตภัณฑ์จาก AIA ที่ได้รับความไว้วางใจ
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              ปรึกษาฟรี
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
            >
              ดูผลิตภัณฑ์
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl shadow-primary/15 sm:max-w-md">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/goals/goal-life.jpg"
                alt="ที่ปรึกษาประกันชีวิต AIA ให้คำปรึกษาลูกค้า"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                  AIA Khun Nan
                </p>
                <p className="mt-1 font-heading text-lg font-semibold leading-snug sm:text-xl">
                  {MAIN_CONTACT.name}
                </p>
                <p className="mt-1 text-sm text-white/85">
                  ตัวแทนประกันชีวิต · ที่ปรึกษาการเงิน
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-border bg-white">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="px-2 py-4 text-center">
                  <p className="font-heading text-base font-bold text-primary sm:text-lg">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-text-muted sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
