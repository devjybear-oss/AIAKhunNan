type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  as?: "h2" | "h3" | "h4";
  className?: string;
  light?: boolean;
};

export default function SectionTitle({
  children,
  subtitle,
  as: Tag = "h2",
  className = "",
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 text-center ${className}`}>
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase ${
          light
            ? "bg-white/10 text-white/90"
            : "bg-primary-light text-primary"
        }`}
      >
        AIAPLANNER
      </span>
      <Tag
        className={`text-xl font-semibold md:text-2xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {children}
      </Tag>
      {!light && (
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
      )}
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-base ${
            light ? "text-slate-300" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
