"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <motion.section
      className="text-center max-w-2xl mx-auto py-12 space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">Transparent Pricing. No Surprises.</h1>
      <p className="text-muted-foreground text-lg">
        Choose a plan that fits your needs — for individuals, couples, or families. Start healing today.
      </p>
    </motion.section>
  );
}
