import Image from "next/image";
import Link from "next/link";
import { MAIN_CONTACT } from "@/lib/data";

export default function HeroBanner() {
  return (
    <section className="mesh-bg relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

      <div className="section-container relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            ตัวแทนประกันชีวิต AIA อย่างมืออาชีพ
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
            วางแผนประกัน
            <span className="gradient-text block">เพื่ออนาคตที่มั่นคง</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-text-muted">
            {MAIN_CONTACT.name} พร้อมให้คำปรึกษาด้านประกันชีวิตและประกันสุขภาพ
            ด้วยผลิตภัณฑ์จาก AIA ที่ได้รับความไว้วางใจ
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              ปรึกษาฟรี
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
            >
              ดูผลิตภัณฑ์
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="glass-card relative w-full max-w-md p-8 text-center">
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-light">
              <Image
                src="https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
                alt="AIAPLANNER"
                width={72}
                height={72}
                priority
              />
            </div>
            <p className="text-sm font-semibold tracking-widest text-primary">
              AIAPLANNER
            </p>
            <p className="mt-2 font-[family-name:var(--font-prompt)] text-2xl font-semibold text-slate-900">
              ประกันสุขภาพ <span className="text-primary">AIA</span>
            </p>
            <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm text-text-muted">
              &ldquo;เราพร้อมให้คำปรึกษาคุณอย่างมืออาชีพ&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
