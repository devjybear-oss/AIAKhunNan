import ContentBlock from "@/components/ContentBlock";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import PillLink from "@/components/PillLink";
import SidebarCTA from "@/components/SidebarCTA";
import { PRODUCTS } from "@/lib/data";
import type { InsuranceProduct } from "@/lib/insurance-products";

type InsuranceProductPageProps = {
  product: InsuranceProduct;
};

function getProductIcon(slug: string) {
  return PRODUCTS.find((item) => item.href === `/${slug}`)?.icon;
}

export default function InsuranceProductPage({
  product,
}: InsuranceProductPageProps) {
  const icon = getProductIcon(product.slug);

  return (
    <article>
      <PageHero
        title={product.title}
        subtitle={product.subtitle}
        eyebrow="ผลิตภัณฑ์ AIA"
        icon={icon}
        breadcrumb={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลิตภัณฑ์", href: "/#products" },
          { label: product.title, href: `/${product.slug}` },
        ]}
      />

      <PageSection variant="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
          <div className="min-w-0 space-y-10">
            <ContentBlock title="ภาพรวมผลิตภัณฑ์">
              <div className="content-prose">
                {product.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title="จุดเด่นที่ควรรู้">
              <ul className="space-y-3">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base"
                  >
                    <span className="mt-0.5 shrink-0 font-semibold text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentBlock>

            {product.relatedProducts && product.relatedProducts.length > 0 && (
              <ContentBlock title="ผลิตภัณฑ์ที่เกี่ยวข้อง" borderTop>
                <div className="flex flex-wrap gap-2">
                  {product.relatedProducts.map((item) => (
                    <PillLink key={item.href} href={item.href}>
                      {item.label}
                    </PillLink>
                  ))}
                </div>
              </ContentBlock>
            )}
          </div>

          <SidebarCTA
            relatedLink={product.relatedService}
            backLink={{ label: "← กลับหน้าผลิตภัณฑ์", href: "/#products" }}
          />
        </div>
      </PageSection>
    </article>
  );
}
