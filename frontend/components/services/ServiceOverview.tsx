"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceOverview() {
  return (
    <section className="w-full bg-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-4xl font-bold">Our Therapy Services</h2>
          <p className="text-muted-foreground text-lg">
            Personalized sessions offered online and offline — choose what works best for you.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white dark:bg-background p-6 rounded-lg shadow space-y-4 text-left">
            <h3 className="text-2xl font-semibold">🌐 Online Therapy</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Join from anywhere — global access</li>
              <li>Secure video sessions</li>
              <li>Time-zone flexible booking</li>
              <li>Anonymous option available</li>
            </ul>
            <Button asChild>
              <Link href="/book">Book a Session</Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-background p-6 rounded-lg shadow space-y-4 text-left">
            <h3 className="text-2xl font-semibold">🏥 In-Person Therapy</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Visit our Gorakhpur clinic</li>
              <li>Face-to-face interaction</li>
              <li>Local trust & accessibility</li>
              <li>Slot booking and rescheduling</li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/schedule">Schedule Appointment</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
