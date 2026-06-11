import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import {
  INSURANCE_PRODUCT_SLUGS,
  getInsuranceProductBySlug,
  insuranceProductMetadata,
} from "@/lib/insurance-products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INSURANCE_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return insuranceProductMetadata(slug);
}

export default async function InsuranceProductRoutePage({ params }: Props) {
  const { slug } = await params;
  const product = getInsuranceProductBySlug(slug);
  if (!product) notFound();

  return <InsuranceProductPage product={product} />;
}
