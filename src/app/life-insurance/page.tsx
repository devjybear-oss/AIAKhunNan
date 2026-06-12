import type { Metadata } from "next";
import { createInsurancePage } from "@/lib/create-insurance-page";
import { insuranceProductMetadata } from "@/lib/insurance-products";

const slug = "life-insurance";

export const metadata: Metadata = insuranceProductMetadata(slug);
export default createInsurancePage(slug);
