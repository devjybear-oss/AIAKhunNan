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
      <Tag
        className={`text-xl font-semibold tracking-tight md:text-2xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {children}
      </Tag>
      {!light && <div className="title-accent" aria-hidden />}
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-xl text-sm leading-relaxed ${
            light ? "text-white/75" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
