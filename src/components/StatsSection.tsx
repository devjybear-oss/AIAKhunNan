import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 text-white md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />

      <div className="section-container relative grid gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm transition hover:bg-white/15"
          >
            <p className="font-heading text-2xl font-bold sm:text-3xl md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/85 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
