"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAIN_CONTACT, NAV_LINKS } from "@/lib/data";
import { IMG } from "@/lib/assets";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="hidden border-b border-white/10 bg-primary-dark md:block">
        <div className="section-container flex items-center justify-between gap-3 py-2 text-xs text-white/90 sm:text-sm">
          <span className="truncate">{MAIN_CONTACT.name} · ตัวแทนประกันชีวิต AIA</span>
          <span className="font-medium text-white">AIA Khun Nan</span>
        </div>
      </div>

      <div className="bg-primary">
        <div className="section-container flex h-16 items-center gap-4 md:h-[4.5rem]">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src={IMG.aiaLogo}
              alt="AIA"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-[family-name:var(--font-prompt)] text-sm font-semibold leading-tight text-white">
                AIA Khun Nan
              </p>
              <p className="text-xs text-white/75">ตัวแทนประกันชีวิต</p>
            </div>
          </Link>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="เมนู"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`${
              menuOpen
                ? "absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-white/10 bg-primary-dark p-4 shadow-lg md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:border-0 md:bg-transparent md:p-0 md:shadow-none"
                : "hidden md:flex md:flex-1 md:flex-row md:items-center md:justify-end"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-primary transition hover:bg-white/90 md:ml-2 md:mt-0"
            >
              ติดต่อเรา
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
