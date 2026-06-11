import { FAQ_SECTION } from "@/lib/page-content";
import SectionTitle from "./SectionTitle";

export default function FaqSection() {
  return (
    <section className="border-y border-border bg-white py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle={FAQ_SECTION.intro}>
          {FAQ_SECTION.title}
        </SectionTitle>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_SECTION.items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-gradient-to-b from-white to-[#fffafb] shadow-sm transition open:border-primary/25 open:shadow-md open:shadow-primary/5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 font-heading text-sm font-semibold leading-snug text-slate-900 sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45 group-open:bg-primary group-open:text-white"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-border/60 px-5 pb-5 pt-4 sm:px-6">
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
