"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="text-center py-16 space-y-6">
      <h2 className="text-3xl font-bold">Need help choosing the right plan?</h2>
      <p className="text-muted-foreground">
        Our team can guide you based on your personal situation.
      </p>
      <Link href="/contact">
        <Button size="lg">Talk to Us</Button>
      </Link>
    </section>
  );
}
