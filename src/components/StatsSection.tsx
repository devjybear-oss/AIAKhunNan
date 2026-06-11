import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="bg-primary py-10 text-white">
      <div className="mx-auto grid max-w-[1270px] gap-8 px-4 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-[family-name:var(--font-prompt)] text-5xl font-medium md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-base md:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
