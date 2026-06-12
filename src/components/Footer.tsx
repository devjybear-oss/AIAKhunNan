import Link from "next/link";
import { FOOTER_PRODUCTS, LINE_URL, MAIN_CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/15 bg-white">
      <div className="section-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-slate-900">
            AIA <span className="text-primary">Khun Nan</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            ตัวแทนประกันชีวิตและที่ปรึกษาการเงิน
            <br />
            {MAIN_CONTACT.name}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary">
            ผลิตภัณฑ์ยอดนิยม
          </h4>
          <ul className="space-y-2 text-sm text-text-muted">
            {FOOTER_PRODUCTS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary">
            ติดต่อ
          </h4>
          <p className="text-sm text-slate-800">{MAIN_CONTACT.name}</p>
          <div className="mt-3 space-y-1.5 text-sm text-text-muted">
            <p>ใบอนุญาต : {MAIN_CONTACT.license}</p>
            <p>ทะเบียน ก.ล.ต. : {MAIN_CONTACT.investmentId}</p>
            <p>โทร : {MAIN_CONTACT.phone}</p>
            <p>
              Line :{" "}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {MAIN_CONTACT.line}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-footer-bg py-5 text-center text-xs text-white/70">
        <p>
          เว็บไซต์นี้ไม่ใช่เว็บไซต์ของบริษัท เอไอเอ จำกัด (เอไอเอ) ·{" "}
          <a
            href="http://www.aia.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:underline"
          >
            www.aia.co.th
          </a>
        </p>
        <p className="mt-2 text-white/50">
          Copyright 2026 © AIA Khun Nan
        </p>
      </div>
    </footer>
  );
}
