import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark py-14 text-white md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,17,69,0.35),transparent_55%)]" />

      <div className="section-container relative grid gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition hover:bg-white/10"
          >
            <p className="font-[family-name:var(--font-prompt)] text-4xl font-bold md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
