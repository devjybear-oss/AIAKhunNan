"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAIN_CONTACT, NAV_LINKS } from "@/lib/data";
import { IMG } from "@/lib/assets";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-white/95 shadow-sm shadow-primary/5 backdrop-blur-md">
      <div className="h-1 w-full bg-primary" aria-hidden />
      <div className="section-container relative flex h-14 items-center gap-4 md:h-16">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <Image
            src={IMG.aiaLogo}
            alt="AIA"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-semibold text-slate-900">
              AIA <span className="text-primary">Khun Nan</span>
            </p>
            <p className="hidden truncate text-xs text-text-muted sm:block">
              {MAIN_CONTACT.name}
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-border text-slate-600 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="เมนู"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`${
            menuOpen
              ? "absolute left-0 right-0 top-full flex flex-col gap-0.5 border-b border-border bg-white p-3 shadow-sm md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-1 md:flex-row md:items-center md:justify-end"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-primary-light hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-1 md:ml-3 md:mt-0"
          >
            ติดต่อเรา
          </Link>
        </nav>
      </div>
    </header>
  );
}
