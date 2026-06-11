"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAIN_CONTACT, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="hidden bg-primary-dark md:block">
        <div className="mx-auto flex max-w-[1270px] items-center justify-between px-4 py-2">
          <div className="text-base leading-snug text-white">
            <span>ตัวแทนประกันชีวิต</span>
            <br />
            <span>{MAIN_CONTACT.name}</span>
          </div>
          <Image
            src="https://aiaplanner.com/wp-content/uploads/2023/08/aia-logo.png"
            alt="AIA Logo"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="relative bg-primary">
        <div className="mx-auto flex h-20 max-w-[1270px] items-center gap-3 px-4">
          <Link href="/" className="shrink-0">
            <Image
              src="https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
              alt="AIAPLANNER"
              width={70}
              height={70}
              className="py-1"
              priority
            />
          </Link>

          <button
            type="button"
            className="ml-auto text-2xl text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="เมนู"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <nav
            className={`${
              menuOpen
                ? "absolute left-0 right-0 top-20 flex flex-col bg-primary p-3 shadow-lg md:static md:flex md:flex-1 md:flex-row md:shadow-none"
                : "hidden md:flex md:flex-1"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded px-3 py-2 font-[family-name:var(--font-prompt)] text-xs font-medium uppercase tracking-wide text-white transition hover:bg-[#b7b7b7] md:text-[0.82rem]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
