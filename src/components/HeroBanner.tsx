import Image from "next/image";
import Link from "next/link";
import { LINE_URL, MAIN_CONTACT } from "@/lib/data";

const HIGHLIGHTS = [
  { value: "500+", label: "ครอบครัวที่ดูแล" },
  { value: "MDRT", label: "ตัวแทนมืออาชีพ" },
  { value: "ฟรี", label: "ปรึกษาไม่มีค่าใช้จ่าย" },
] as const;

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl"
        aria-hidden
      />

      <div className="section-container relative grid items-center gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-20">
        <div>
          <p className="eyebrow">ตัวแทนประกันชีวิต AIA</p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            วางแผนประกัน
            <span className="mt-1 block text-primary">เพื่ออนาคตที่มั่นคง</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-text-muted md:text-base">
            {MAIN_CONTACT.name} พร้อมให้คำปรึกษาด้านประกันชีวิตและประกันสุขภาพ
            ด้วยผลิตภัณฑ์จาก AIA ที่ได้รับความไว้วางใจ
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              คุยทาง LINE
            </a>
            <Link href="#products" className="btn-secondary">
              ดูผลิตภัณฑ์
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="card w-full max-w-sm overflow-hidden border-primary/20 sm:max-w-md">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/goals/goal-life.jpg"
                alt="ที่ปรึกษาประกันชีวิต AIA"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs text-white/70">AIA Khun Nan</p>
                <p className="mt-1 font-heading text-lg font-semibold">
                  {MAIN_CONTACT.name}
                </p>
                <p className="mt-0.5 text-sm text-white/80">
                  ตัวแทนประกันชีวิต · ที่ปรึกษาการเงิน
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-primary/10 bg-primary-light/30">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="px-2 py-4 text-center">
                  <p className="font-heading text-base font-bold text-primary">
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
