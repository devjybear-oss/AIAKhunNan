"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_CONTACT, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-lg"
          : "bg-white"
      }`}
    >
      <div className="hidden border-b border-border bg-slate-50 md:block">
        <div className="section-container flex items-center justify-between py-2 text-sm text-text-muted">
          <span>{MAIN_CONTACT.name} · ตัวแทนประกันชีวิต AIA</span>
          <span className="font-medium text-primary">AIA Khun Nan</span>
        </div>
      </div>

      <div className="section-container flex h-16 items-center gap-4 md:h-[4.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
            alt="AIAPLANNER"
            width={48}
            height={48}
            className="rounded-xl"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-[family-name:var(--font-prompt)] text-sm font-semibold leading-tight text-slate-900">
              AIA Khun Nan
            </p>
            <p className="text-xs text-text-muted">ตัวแทนประกันชีวิต</p>
          </div>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border text-slate-700 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="เมนู"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`${
            menuOpen
              ? "absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-border bg-white p-4 shadow-lg md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-1 md:flex-row md:items-center md:justify-end"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-xl bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-primary-hover md:ml-2 md:mt-0"
          >
            ติดต่อเรา
          </Link>
        </nav>
      </div>
    </header>
  );
}
