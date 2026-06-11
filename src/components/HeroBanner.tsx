import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f0f0f0]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #e0e0e0 0px, #e0e0e0 2px, transparent 2px, transparent 12px)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary" />

      <div className="relative mx-auto flex max-w-[1270px] flex-col items-center px-6 py-14 text-center md:py-20">
        <Image
          src="https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
          alt="AIAPLANNER"
          width={100}
          height={100}
          className="mb-6"
          priority
        />
        <p className="mb-1 text-xs font-medium tracking-widest text-gray-500">
          AIAPLANNER
        </p>

        <h1 className="font-[family-name:var(--font-prompt)] text-3xl font-medium text-gray-800 md:text-4xl lg:text-5xl">
          ตัวแทนประกันชีวิต
        </h1>
        <p className="mt-2 font-[family-name:var(--font-prompt)] text-2xl font-medium text-gray-700 md:text-3xl">
          ประกันสุขภาพ <span className="text-primary">AIA</span>
        </p>

        <p className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 font-[family-name:var(--font-prompt)] text-sm text-white shadow-md md:text-base">
          &ldquo;เราพร้อมให้คำปรึกษาคุณอย่างมืออาชีพ&rdquo;
        </p>
      </div>
    </section>
  );
}
