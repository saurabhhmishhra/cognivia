"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full py-20 bg-primary/5 dark:bg-muted/40">
      <Container className="text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Ready to Take the First Step?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Whether you’re seeking support, clarity, or long-term healing — CogNivia is here for you.
          Start your journey today, from anywhere in the world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <Button size="lg">Book a Session</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
