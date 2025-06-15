"use client";

import Image from "next/image";
// import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const certifications = [
  { src: "/logos/apa.png", alt: "American Psychological Association" },
  { src: "/logos/iso.png", alt: "ISO Certified" },
  { src: "/logos/who.png", alt: "World Health Organization" },
  { src: "/logos/hipaa.png", alt: "HIPAA Compliant" },
];

export default function Certifications() {
  return (
    <section className="w-full bg-muted/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-muted-foreground mb-10"
        >
          Trusted & Certified by
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {certifications.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-full h-28 bg-white rounded-xl shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
