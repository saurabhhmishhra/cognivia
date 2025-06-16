"use client";

import ServiceHero from "@/components/services/ServiceHero";
import TherapyCategories from "@/components/services/TherapyCategories";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import Footer from "@/components/Footer";
import ServiceOverview from "@/components/services/ServiceOverview";

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceOverview/>
      <TherapyCategories />
      <ServiceFAQ />
      <Footer />
    </main>
  );
}
