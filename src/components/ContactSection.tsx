import { MAIN_CONTACT } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1270px] px-4">
        <SectionTitle>ติดต่อเรา</SectionTitle>

        <div className="mx-auto mt-8 max-w-xl">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-center font-[family-name:var(--font-prompt)] text-xl font-medium">
              {MAIN_CONTACT.name}
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                • เลขที่ใบอนุญาตตัวแทนประกันชีวิต : {MAIN_CONTACT.license}
              </li>
              <li>
                • เลขที่ทะเบียนผู้แนะนำการลงทุน : {MAIN_CONTACT.investmentId}
              </li>
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <span className="flex cursor-default items-center justify-center rounded-md bg-gray-200 px-4 py-3 text-sm font-medium text-gray-500">
                โทร : {MAIN_CONTACT.phone}
              </span>
              <span className="flex cursor-default items-center justify-center rounded-md bg-gray-200 px-4 py-3 text-sm font-medium text-gray-500">
                Line : {MAIN_CONTACT.line}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
