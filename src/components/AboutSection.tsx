import Link from "next/link";
import SectionTitle from "./SectionTitle";

const SERVICES = [
  "การวางแผนประกันสุขภาพ ทั้งเด็กและผู้ใหญ่",
  "การวางแผนลดหย่อนภาษี",
  "การวางแผนเกษียณ",
  "วางแผนกองทุนการศึกษาลูก",
  "วางแผนคุ้มครองค่าความสามารถ",
  "วางแผนคุ้มครองภาระหนี้สิ้น",
  "วางแผนการส่งต่อด้วยประกันชีวิต",
];

export default function AboutSection() {
  return (
    <section className="border-y border-border bg-white py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle="มุ่งมั่นพัฒนาเพื่อให้บริการที่ปรึกษาที่ดีที่สุด">
          เกี่ยวกับเรา
        </SectionTitle>

        <div className="mx-auto grid max-w-5xl gap-8">
          <div className="space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              ด้วยความมุ่งมั่นและตั้งใจในการพัฒนาตนเองอย่างต่อเนื่อง
              และต้องการยกระดับวิชาชีพตัวแทนประกันชีวิตให้เป็นที่ยอมรับ
              และเป็นที่พึ่งของประชาชนในการวางแผนป้องกันความเสี่ยงและการเก็บออม
            </p>
            <p>
              จึงทำให้เราได้รับความไว้วางใจในการวางแผนประกัน วางแผนการออม
              และการวางแผนการเงินส่วนบุคคล จากลูกค้าหลากหลายอาชีพ
              จนทำให้มีลูกค้าวางใจให้ดูแลบริการมากกว่า 500 ครอบครัว
            </p>
            <p>
              การันตีด้วยคุณวุฒิ{" "}
              <Link
                href="/mdrt"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                ตัวแทน AIA MDRT
              </Link>{" "}
              กว่า 7 ปีต่อเนื่อง
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-slate-50 p-6 md:p-8">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              บริการที่เรามี
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-text-muted">
            ได้รับอนุญาตจาก{" "}
            <a
              href="https://smart.oic.or.th/EService/Menu1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              คปภ.
            </a>{" "}
            และ{" "}
            <a
              href="https://market.sec.or.th/public/orap/IC01.aspx?lang=th"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              ก.ต.ล.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
