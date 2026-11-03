import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import ContactForm from "@/components/ContactForm";
import { site, contact } from "@/data/site";

export const metadata = {
  title: "Contact | Kilnroom",
  description: contact.lead,
};

export default function Contact() {
  return (
    <>
      <PageHero title={contact.title} lead={contact.lead} images={contact.images}>
        <a href={`mailto:${site.email}`} className="btn btn--primary">
          Email us
        </a>
        <a href="/#classes" className="btn btn--ghost">
          See the classes
        </a>
      </PageHero>
      <Statement>{contact.statement}</Statement>
      <section className="contact container">
        <div className="contact__side">
          <h2>Send a note</h2>
          <p>
            Prefer your own email app? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
