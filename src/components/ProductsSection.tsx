import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle="เลือกดูข้อมูลสินค้าและผลิตภัณฑ์ที่คุณต้องการ">
          ผลิตภัณฑ์
        </SectionTitle>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 transition group-hover:bg-primary-light">
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-prompt)] text-sm font-medium text-slate-800 transition group-hover:text-primary">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
