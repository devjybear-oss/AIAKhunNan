import PageSection from "@/components/PageSection";
import SidebarCTA from "@/components/SidebarCTA";

type DetailPageLayoutProps = {
  children: React.ReactNode;
  sidebar?: {
    title?: string;
    description?: string;
    relatedLink?: { label: string; href: string };
    backLink?: { label: string; href: string };
  };
};

export default function DetailPageLayout({
  children,
  sidebar,
}: DetailPageLayoutProps) {
  return (
    <PageSection variant="white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
        <div className="min-w-0 space-y-10">{children}</div>
        <SidebarCTA
          title={sidebar?.title}
          description={sidebar?.description}
          relatedLink={sidebar?.relatedLink}
          backLink={sidebar?.backLink}
        />
      </div>
    </PageSection>
  );
}
