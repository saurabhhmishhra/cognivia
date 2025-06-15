"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="w-full py-20 bg-white dark:bg-background">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About CogNivia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base sm:text-lg"
        >
          CogNivia is a leading mental health clinic offering evidence-based therapy and emotional support — accessible both online and offline — designed for individuals, families, and professionals across the globe.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/about-psychologist.jpg" // <- Update if needed
            alt="Founder of CogNivia"
            fill
            className="object-cover object-[center_35%]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Meet the Founder
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded by a certified clinical psychologist with a vision to make mental health support universally accessible, CogNivia blends compassion with science. We are committed to transforming lives through personalized care and global outreach.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Our Mission:</strong> To empower individuals to navigate life’s challenges through accessible, culturally competent therapy.</p>
            <p><strong>Our Vision:</strong> A world where mental health care is not a luxury, but a standard part of human wellness.</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-base">
            <li>Globally recognized professionals</li>
            <li>Hybrid care model: online & offline</li>
            <li>Tailored programs for every age group</li>
          </ul>
          <Button size="lg" variant="default">
            Learn More
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
