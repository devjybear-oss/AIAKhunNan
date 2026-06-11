import Link from "next/link";
import { FOOTER_PRODUCTS, MAIN_CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-4">
      <section className="border-t-4 border-primary bg-footer-light py-12 text-text-muted">
        <div className="section-container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-prompt)] text-xl font-bold text-primary">
              AIA Khun Nan
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              ตัวแทนประกันชีวิตและที่ปรึกษาการเงิน
              <br />
              {MAIN_CONTACT.name}
            </p>
            <p className="mt-2 text-sm">
              พร้อมให้บริการคุณด้วยความเป็นมืออาชีพ
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-800 uppercase">
              ผลิตภัณฑ์ยอดนิยม
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-slate-800 uppercase">
              ติดต่อตัวแทนประกัน
            </h4>
            <p className="text-sm font-medium text-slate-800">
              {MAIN_CONTACT.name}
            </p>
            <p className="mt-2 text-xs">
              ใบอนุญาต : {MAIN_CONTACT.license}
            </p>
            <p className="text-xs">
              ทะเบียน ก.ล.ต. : {MAIN_CONTACT.investmentId}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>โทร : {MAIN_CONTACT.phone}</p>
              <p>Line : {MAIN_CONTACT.line}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-footer-bg py-6 text-center text-xs text-white/80">
        <p>
          เว็บไซต์นี้ไม่ใช่เว็บไซต์ของบริษัท เอไอเอ จำกัด (เอไอเอ) ·{" "}
          <a
            href="http://www.aia.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            www.aia.co.th
          </a>
        </p>
        <p className="mt-2 text-white/60">
          Copyright 2026 © <strong className="text-white/90">AIA Khun Nan</strong>
        </p>
      </div>
    </footer>
  );
}
