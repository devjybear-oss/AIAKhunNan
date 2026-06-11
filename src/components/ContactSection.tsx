import { CONTACT_INFO } from "@/lib/page-content";
import ContactCard from "./ContactCard";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="section-container">
        <SectionTitle subtitle={CONTACT_INFO.subtitle}>
          ติดต่อเรา
        </SectionTitle>

        <div className="mx-auto max-w-lg">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
