"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/public/hero-therapy-1.png"; // Ensure this image exists
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left md:w-1/2 space-y-4"
      >
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide">
          Take Action Now
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          "Healing doesn’t mean the damage never existed. It means the damage no longer controls your life."
        </h1>
        <p className="text-muted-foreground text-lg">
          Your mental well-being deserves attention. Whether you're battling anxiety, burnout, or seeking clarity, the right support can change your story — starting today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <Button asChild><Link href="/book">Book a Session</Link></Button>
          <Button variant="outline" asChild><Link href="/schedule">Schedule Appointment</Link></Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <Image
          src={heroImg}
          alt="Therapy Hero"
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
