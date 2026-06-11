type SectionTitleProps = {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
};

export default function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`my-8 text-center ${className}`}>
      <Tag className="flex items-center justify-center gap-4 font-[family-name:var(--font-prompt)] text-xl font-medium md:text-2xl">
        <span className="hidden h-0.5 max-w-20 flex-1 bg-gray-300 sm:block" />
        <span className="shrink-0">{children}</span>
        <span className="hidden h-0.5 max-w-20 flex-1 bg-gray-300 sm:block" />
      </Tag>
    </div>
  );
}
