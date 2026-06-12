import { notFound } from "next/navigation";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { getInsuranceProductBySlug } from "@/lib/insurance-products";

export function createInsurancePage(slug: string) {
  return function InsurancePage() {
    const product = getInsuranceProductBySlug(slug);
    if (!product) notFound();
    return <InsuranceProductPage product={product} />;
  };
}
