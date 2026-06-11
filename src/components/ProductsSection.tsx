import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function ProductsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1270px] px-4">
        <SectionTitle>ผลิตภัณฑ์</SectionTitle>
        <p className="-mt-4 mb-8 text-center text-lg">
          เลือกดูข้อมูลสินค้าและผลิตภัณฑ์ที่คุณต้องการ
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group flex flex-col items-center text-center transition hover:-translate-y-1"
            >
              <div className="mb-3 flex h-[125px] w-[125px] items-center justify-center rounded-full border-[5px] border-gray-100 bg-white shadow-sm transition group-hover:shadow-md">
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-prompt)] text-sm font-medium text-gray-800 group-hover:text-primary md:text-base">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
