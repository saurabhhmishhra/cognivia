"use client";

import PricingHero from "@/components/pricing/PricingHero";
import PricingTable from "@/components/pricing/PricingTable";
import PricingCTA from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <PricingHero />
      <PricingTable />
      <PricingCTA />
    </main>
  );
}
