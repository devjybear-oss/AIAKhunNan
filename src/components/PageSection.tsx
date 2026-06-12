type PageSectionProps = {
  children: React.ReactNode;
  variant?: "muted" | "white";
  border?: "top" | "bottom" | "y" | "none";
  id?: string;
  className?: string;
  containerClassName?: string;
};

const borderClass = {
  top: "border-t border-primary/10",
  bottom: "border-b border-primary/10",
  y: "border-y border-primary/10",
  none: "",
};

const variantClass = {
  muted: "bg-surface-muted",
  white: "bg-white",
};

export default function PageSection({
  children,
  variant = "muted",
  border = "none",
  id,
  className = "",
  containerClassName = "",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`page-section ${variantClass[variant]} ${borderClass[border]} ${className}`}
    >
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
