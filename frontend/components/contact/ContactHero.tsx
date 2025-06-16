"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Whether you have questions, need help, or just want to connect — we're here for you. Reach out anytime.
      </p>
    </motion.div>
  );
}
