import Button from "@/components/Button";

type CtaAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "success";
};

type PageCTAProps = {
  title: string;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
};

export default function PageCTA({
  title,
  description,
  primary,
  secondary,
}: PageCTAProps) {
  return (
    <section className="page-section border-t border-border bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-light via-primary-light/40 to-white p-8 text-center md:p-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900 md:text-2xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-muted md:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={primary.href}
              variant={primary.variant ?? "primary"}
              external={primary.external}
            >
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant={secondary.variant ?? "secondary"}
                external={secondary.external}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
