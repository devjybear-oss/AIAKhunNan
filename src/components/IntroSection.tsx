import Image from "next/image";
import PageSection from "@/components/PageSection";
import { IMG } from "@/lib/assets";
import { ADVISOR_SECTION } from "@/lib/page-content";

export default function IntroSection() {
  return (
    <PageSection variant="muted" border="bottom">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{ADVISOR_SECTION.badge}</p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {ADVISOR_SECTION.headline}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
          {ADVISOR_SECTION.about}
        </p>
      </div>

      <div className="card mx-auto mt-10 max-w-3xl overflow-hidden border-primary/20">
        <div className="grid md:grid-cols-[auto_1fr]">
          <div className="flex items-center justify-center border-b border-primary/10 bg-primary-light/40 px-8 py-6 md:border-b-0 md:border-r">
            <Image
              src={IMG.aiaLogo}
              alt="โลโก้ AIA"
              width={100}
              height={40}
              className="h-9 w-auto object-contain md:h-10"
            />
          </div>
          <p className="px-6 py-6 text-sm leading-relaxed text-text-muted md:px-8 md:text-base">
            {ADVISOR_SECTION.aiaTrust}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <h3 className="font-heading text-xl font-semibold text-slate-900 md:text-2xl">
          {ADVISOR_SECTION.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
          {ADVISOR_SECTION.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
        {ADVISOR_SECTION.benefits.map((item) => (
          <div key={item.step} className="card card-hover p-6">
            <span className="text-xs font-semibold text-primary">{item.step}</span>
            <h4 className="mt-3 font-heading text-base font-semibold text-slate-900">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
