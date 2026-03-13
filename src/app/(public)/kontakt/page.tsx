import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="px-6 py-10 md:px-12">
      <h1 className="text-3xl font-semibold">Kontakt</h1>
      <p className="mt-4 max-w-2xl text-neutral-300">
        Opisz, czego potrzebuje Twój zespół. Odpowiemy z propozycją działań,
        terminem i orientacyjnym budżetem.
      </p>

      <ContactForm />
    </div>
  );
}
