import Link from "next/link";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function PillLink({ href, children }: PillLinkProps) {
  return (
    <Link href={href} className="pill-link">
      {children}
    </Link>
  );
}
