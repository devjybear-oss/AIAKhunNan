type ContentBlockProps = {
  title: string;
  children: React.ReactNode;
  borderTop?: boolean;
};

export default function ContentBlock({
  title,
  children,
  borderTop = false,
}: ContentBlockProps) {
  return (
    <section className={borderTop ? "border-t border-border pt-10" : ""}>
      <h2 className="font-heading text-lg font-semibold text-slate-900 md:text-xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
