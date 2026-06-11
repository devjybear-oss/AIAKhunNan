import Image from "next/image";
import { IMG } from "@/lib/assets";
import { ADVISOR_SECTION } from "@/lib/page-content";

export default function IntroSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-white to-[#fffafb] py-14 md:py-20">
      <div className="section-container">
        {/* ส่วนแนะนำ AIA Khun Nan */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {ADVISOR_SECTION.badge}
          </span>
          <h2 className="mt-5 font-heading text-2xl font-bold text-slate-900 md:text-3xl">
            {ADVISOR_SECTION.headline}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            {ADVISOR_SECTION.about}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm md:mt-10">
          <div className="grid md:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center border-b border-primary/10 bg-primary-light/40 px-8 py-6 md:border-b-0 md:border-r md:py-8">
              <Image
                src={IMG.aiaLogo}
                alt="โลโก้ AIA"
                width={120}
                height={48}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
            <p className="px-6 py-6 text-sm leading-relaxed text-slate-600 sm:px-8 sm:text-base md:py-8">
              {ADVISOR_SECTION.aiaTrust}
            </p>
          </div>
        </div>

        {/* ทำไมควรปรึกษาตัวแทน */}
        <div className="mx-auto mt-14 max-w-3xl text-center md:mt-16">
          <h3 className="relative inline-block pb-3.5 font-heading text-xl font-bold text-primary md:text-2xl">
            {ADVISOR_SECTION.title}
            <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-[#ff8aaa]" />
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            {ADVISOR_SECTION.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {ADVISOR_SECTION.benefits.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 md:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-heading text-sm font-bold text-primary transition group-hover:bg-primary group-hover:text-white">
                {item.step}
              </span>
              <h4 className="mt-4 font-heading text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
