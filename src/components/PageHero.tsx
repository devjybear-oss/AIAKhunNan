import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
};

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 text-white md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />

      <div className="section-container relative">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/70">
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-heading text-2xl font-semibold sm:text-3xl md:text-[1.75rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
