"use client";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";



export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      <ContactHero/>
      <ContactForm/>
      <ContactDetails/>

    </main>
  );
}
