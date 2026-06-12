import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumb?: { label: string; href: string }[];
  icon?: string;
  actions?: React.ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumb,
  icon,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
        aria-hidden
      />

      <div className="section-container relative py-14 md:py-16">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-700">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex items-start gap-4 md:gap-5">
          {icon && (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-light ring-1 ring-primary/15 md:h-16 md:w-16">
              <Image
                src={icon}
                alt=""
                width={36}
                height={36}
                className="object-contain"
                aria-hidden
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
                {subtitle}
              </p>
            )}
            {actions && (
              <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
