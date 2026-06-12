import PageSection from "@/components/PageSection";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function ProductsSection() {
  return (
    <PageSection id="products" variant="muted">
      <SectionTitle subtitle="เลือกดูข้อมูลสินค้าและผลิตภัณฑ์ที่คุณต้องการ">
        ผลิตภัณฑ์
      </SectionTitle>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>
    </PageSection>
  );
}
