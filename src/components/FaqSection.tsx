import PageSection from "@/components/PageSection";
import { FAQ_SECTION } from "@/lib/page-content";
import SectionTitle from "./SectionTitle";

export default function FaqSection() {
  return (
    <PageSection variant="muted">
      <SectionTitle subtitle={FAQ_SECTION.intro}>
        {FAQ_SECTION.title}
      </SectionTitle>

      <div className="mx-auto max-w-2xl space-y-2">
        {FAQ_SECTION.items.map((item, index) => (
          <details
            key={item.question}
            className="card group open:border-primary/40 open:bg-primary-light/20"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-heading text-sm font-medium text-slate-900 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-lg leading-none text-text-muted transition group-open:rotate-45 group-open:text-primary"
              >
                +
              </span>
            </summary>
            <div className="border-t border-border px-5 pb-4 pt-3">
              <p className="text-sm leading-relaxed text-text-muted">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </PageSection>
  );
}
