"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HelpHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center items-center space-y-6"
    >
      <h1 className="text-4xl font-bold">Anonymous Help Corner</h1>
      <p className="text-muted-foreground text-base max-w-xl mx-auto">
        Share your story, seek support, or offer advice — anonymously and safely. You’re not alone.
      </p>
      <Link href="/help/submit">
        <Button size="lg">Share Your Story</Button>
      </Link>
    </motion.div>
  );
}
