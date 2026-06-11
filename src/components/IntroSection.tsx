import SectionTitle from "./SectionTitle";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle="ที่ปรึกษาการเงินและประกันชีวิตมืออาชีพ">
          ตัวแทนประกันชีวิต AIAplanner
        </SectionTitle>

        <div className="glass-card mx-auto max-w-4xl space-y-5 p-8 text-base leading-relaxed text-slate-600 md:p-10">
          <p>
            <strong className="text-slate-900">AIAplanner</strong> คือ
            บริการตัวแทนประกันชีวิตและที่ปรึกษาทางการเงิน
            ที่มุ่งเน้นการวางแผนการเงิน วางแผนการประกันชีวิตและประกันสุขภาพ
            เพื่อความมั่นคงทางการเงินของครอบครัว
          </p>
          <p>
            ได้มั่นใจในความมั่นคง และความเป็นมืออาชีพของบริษัท AIA
            ที่มีความมั่นคงทางการเงินสูงสุด ผ่านการประกอบธุรกิจมาอย่างยาวนาน
            ผ่านทุกวิกฤตการณ์ทางเศรษฐกิจ อีกทั้งยังเป็นผู้นำในเรื่องของนวัตกรรม
            ผลิตภัณฑ์ประกันชีวิต ประกันสุขภาพ และ Unit Linked
          </p>
        </div>

        <p className="mt-8 text-center text-sm font-semibold tracking-wide text-primary uppercase">
          ผลงานสะสมทีมงานเราถึงปี 2568
        </p>
      </div>
    </section>
  );
}
