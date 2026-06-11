import Link from "next/link";
import { FOOTER_PRODUCTS, MAIN_CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10">
      <section className="bg-footer-light py-8">
        <div className="mx-auto grid max-w-[1270px] gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <p className="font-[family-name:var(--font-prompt)] text-xl font-bold text-primary">
              AIAPLANNER
            </p>
            <p className="mt-2 text-sm text-text-muted">
              ตัวแทนประกันชีวิต
              <br />
              และที่ปรึกษาการเงิน
            </p>
            <p className="mt-2 text-sm text-text-muted">
              {MAIN_CONTACT.name}
            </p>
            <p className="text-sm text-text-muted">
              พร้อมให้บริการคุณด้วยความเป็นมืออาชีพ
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-prompt)] text-base font-medium">
              ผลิตภัณฑ์ยอดนิยม
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-prompt)] text-base font-medium">
              ติดต่อตัวแทนประกัน
            </h4>
            <p className="mb-2 text-center text-sm font-medium">
              {MAIN_CONTACT.name}
            </p>
            <p className="mb-2 text-center text-xs text-text-muted">
              เลขที่ใบอนุญาตตัวแทนประกันชีวิต : {MAIN_CONTACT.license}
            </p>
            <p className="mb-3 text-center text-xs text-text-muted">
              เลขที่ทะเบียนผู้แนะนำการลงทุน : {MAIN_CONTACT.investmentId}
            </p>
            <p className="mb-2 flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 text-sm text-gray-500">
              โทร : {MAIN_CONTACT.phone}
            </p>
            <p className="flex w-full items-center justify-center rounded-md bg-gray-200 px-4 py-3 text-sm text-gray-500">
              Line : {MAIN_CONTACT.line}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-footer-bg py-6 text-center text-sm text-white">
        <p>
          เว็บไซต์นี้ไม่ใช่เว็บไซต์ของบริษัท เอไอเอ จำกัด (เอไอเอ) หากต้องการติดต่อ
          เอไอเอ กรุณาคลิก{" "}
          <a
            href="http://www.aia.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300 hover:underline"
          >
            www.aia.co.th
          </a>
        </p>
        <p className="mt-2">
          Copyright 2026 © <strong>AIAPLANNER</strong>
        </p>
      </div>
    </footer>
  );
}
