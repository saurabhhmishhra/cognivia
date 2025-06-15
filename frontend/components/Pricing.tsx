"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="w-full py-20 bg-muted/40">
      <Container className="space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Whether you're exploring therapy or committed to long-term care, we have a plan for you — online or offline, globally accessible.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* One-Time Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-background border rounded-lg p-8 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">One-Time Session</h3>
              <p className="text-muted-foreground">
                Ideal if you want to try therapy or book as needed.
              </p>
              <div className="text-3xl font-bold">
                ₹1499 / $30 <span className="text-base font-normal text-muted-foreground">per session</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                <li>60 min session</li>
                <li>Video / Offline available</li>
                <li>Free therapist matching</li>
              </ul>
            </div>
            <Button className="mt-6 w-full">Book Now</Button>
          </motion.div>

          {/* Subscription Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-background border border-primary rounded-lg p-8 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Subscription Plan</h3>
              <p className="text-muted-foreground">
                For those who want consistent, affordable care.
              </p>
              <div className="text-3xl font-bold text-primary">
                ₹3999 / $75 <span className="text-base font-normal text-muted-foreground">per month</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4">
                <li>4 sessions/month</li>
                <li>Priority scheduling</li>
                <li>Ongoing therapist chat</li>
              </ul>
            </div>
            <Button variant="outline" className="mt-6 w-full">See Plans</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
