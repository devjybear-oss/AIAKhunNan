import PageSection from "@/components/PageSection";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <PageSection variant="white" border="bottom" className="bg-primary-light/35">
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-primary md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
