"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Image from "next/image";

const testimonials = [
  {
    name: "Sophia R.",
    message: "Therapy here changed my life. My therapist truly understood me.",
    image: "/avatars/avatar-1.jpg",
  },
  {
    name: "Daniel K.",
    message: "Flexible sessions and easy access. I feel supported every day.",
    image: "/avatars/avatar-2.jpg",
  },
  {
    name: "Aarav M.",
    message: "As an Indian student abroad, I found comfort and clarity here.",
    image: "/avatars/avatar-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-20">
      <Container className="space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-muted p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover object-center"
                />
                <span className="font-medium">{t.name}</span>
              </div>
              <p className="text-muted-foreground text-sm italic">“{t.message}”</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
