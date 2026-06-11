import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "success";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-[family-name:var(--font-prompt)] text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg";
  const colors =
    variant === "success"
      ? "bg-success hover:bg-success/90"
      : "bg-primary hover:bg-primary-hover";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${colors} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${colors} ${className}`}>
      {children}
    </Link>
  );
}
