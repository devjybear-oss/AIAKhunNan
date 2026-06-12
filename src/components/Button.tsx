import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
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
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    success:
      "inline-flex items-center justify-center rounded-lg bg-success px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90",
  };

  const classes = `${styles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
