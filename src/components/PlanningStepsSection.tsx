import PageSection from "@/components/PageSection";
import { PLANNING_STEPS_SECTION } from "@/lib/page-content";
import SectionTitle from "./SectionTitle";

export default function PlanningStepsSection() {
  return (
    <PageSection variant="white" border="y">
      <SectionTitle subtitle={PLANNING_STEPS_SECTION.intro}>
        {PLANNING_STEPS_SECTION.title}
      </SectionTitle>

      <ol className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PLANNING_STEPS_SECTION.steps.map((item) => (
          <li key={item.step} className="card card-hover p-5">
            <span className="text-xs font-semibold text-primary">{item.step}</span>
            <h3 className="mt-3 font-heading text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
