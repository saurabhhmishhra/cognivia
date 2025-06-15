"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import { FaLaptopMedical, FaUserFriends, FaBrain, FaChild } from "react-icons/fa";

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "Online Therapy",
    description: "Private and convenient sessions from the comfort of your home.",
    icon: FaLaptopMedical,
  },
  {
    title: "In-Person Counseling",
    description: "Visit our clinic for face-to-face therapeutic sessions.",
    icon: FaUserFriends,
  },
  {
    title: "Mental Wellness Programs",
    description: "Structured plans for anxiety, stress, and emotional growth.",
    icon: FaBrain,
  },
  {
    title: "Adolescent Support",
    description: "Special care for teens dealing with academic, social, or emotional issues.",
    icon: FaChild,
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 bg-muted/40">
      <Container className="space-y-12 text-center">
        {/* Heading */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base sm:text-lg"
          >
            Compassionate care tailored to your needs — delivered in the format that suits you best.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-background rounded-xl p-6 shadow-md border hover:shadow-lg transition-all"
            >
              <service.icon className="text-primary w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <Button size="lg" className="mt-6">
          View All Services
        </Button>
      </Container>
    </section>
  );
}
