import { PLANNING_STEPS_SECTION } from "@/lib/page-content";
import SectionTitle from "./SectionTitle";

export default function PlanningStepsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-[#fffafb] to-white py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle={PLANNING_STEPS_SECTION.intro}>
          {PLANNING_STEPS_SECTION.title}
        </SectionTitle>

        <ol className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PLANNING_STEPS_SECTION.steps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < PLANNING_STEPS_SECTION.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-5 hidden h-px w-[calc(100%+1.25rem)] bg-gradient-to-r from-primary/40 to-primary/10 lg:block"
                />
              )}
              <div className="relative h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-white shadow-md shadow-primary/25">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
