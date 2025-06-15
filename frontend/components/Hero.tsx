'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/public/hero.png"; // Make sure this image exists
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left md:w-1/2 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Start your journey to <span className="text-primary">better mental health</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Connect with certified psychologists for online or offline therapy tailored to you.
        </p>
        <Link href="/auth/signup">
          <Button className="mt-4">Get Started</Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <Image
          src={heroImg}
          alt="Mental wellness illustration"
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
}
