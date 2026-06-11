import Image from "next/image";
import Link from "next/link";
import { MAIN_CONTACT } from "@/lib/data";

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
          <div className="glass-card relative w-full max-w-sm p-6 text-center sm:max-w-md sm:p-7">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-light">
              <Image
                src="https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
                alt="AIAPLANNER"
                width={60}
                height={60}
                priority
              />
            </div>
            <p className="text-xs font-semibold tracking-widest text-primary">
              AIAPLANNER
            </p>
            <p className="mt-2 font-heading text-lg font-semibold text-slate-900 sm:text-xl">
              ประกันสุขภาพ <span className="text-primary">AIA</span>
            </p>
            <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5 text-xs leading-relaxed text-text-muted sm:text-sm">
              &ldquo;เราพร้อมให้คำปรึกษาคุณอย่างมืออาชีพ&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
