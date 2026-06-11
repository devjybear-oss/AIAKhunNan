import Link from "next/link";
import { FOOTER_PRODUCTS, MAIN_CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-4">
      <section className="border-t border-white/10 bg-slate-900 py-12 text-slate-300">
        <div className="section-container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-prompt)] text-xl font-bold text-white">
              AIA Khun Nan
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              ตัวแทนประกันชีวิตและที่ปรึกษาการเงิน
              <br />
              {MAIN_CONTACT.name}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              พร้อมให้บริการคุณด้วยความเป็นมืออาชีพ
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              ผลิตภัณฑ์ยอดนิยม
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              ติดต่อตัวแทนประกัน
            </h4>
            <p className="text-sm font-medium text-white">
              {MAIN_CONTACT.name}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              ใบอนุญาต : {MAIN_CONTACT.license}
            </p>
            <p className="text-xs text-slate-400">
              ทะเบียน ก.ล.ต. : {MAIN_CONTACT.investmentId}
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>โทร : {MAIN_CONTACT.phone}</p>
              <p>Line : {MAIN_CONTACT.line}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-footer-bg py-6 text-center text-xs text-slate-400">
        <p>
          เว็บไซต์นี้ไม่ใช่เว็บไซต์ของบริษัท เอไอเอ จำกัด (เอไอเอ) ·{" "}
          <a
            href="http://www.aia.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white hover:underline"
          >
            www.aia.co.th
          </a>
        </p>
        <p className="mt-2 text-slate-500">
          Copyright 2026 © <strong className="text-slate-300">AIA Khun Nan</strong>
        </p>
      </div>
    </footer>
  );
}
