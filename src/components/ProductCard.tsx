import Image from "next/image";
import Link from "next/link";
import type { ProductItem } from "@/lib/data";

type ProductCardProps = {
  product: ProductItem;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className="card card-hover group !flex flex-col items-center justify-center p-4 text-center shadow-sm shadow-primary/5 sm:p-5"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light sm:h-14 sm:w-14">
        <Image
          src={product.icon}
          alt=""
          width={32}
          height={32}
          className="pointer-events-none mx-auto object-contain"
          aria-hidden
        />
      </div>
      <h4 className="w-full text-center font-heading text-xs font-medium leading-snug text-slate-800 transition group-hover:text-primary sm:text-sm">
        {product.title}
      </h4>
    </Link>
  );
}
