import ContactCard from "@/components/ContactCard";
import PageSection from "@/components/PageSection";
import { CONTACT_INFO } from "@/lib/page-content";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <PageSection id="contact" variant="white" border="top">
      <SectionTitle subtitle={CONTACT_INFO.subtitle}>
        ติดต่อเรา
      </SectionTitle>

      <div className="mx-auto max-w-md">
        <ContactCard />
      </div>
    </PageSection>
  );
}
