"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Anxiety & Stress",
    emoji: "😰",
    desc: "Coping with overwhelming pressure, racing thoughts, or constant worry.",
  },
  {
    title: "Depression",
    emoji: "😔",
    desc: "Support for sadness, loss of interest, or emotional heaviness.",
  },
  {
    title: "Relationship Issues",
    emoji: "💔",
    desc: "Navigating conflicts, communication gaps, or emotional disconnect.",
  },
  {
    title: "Career & Burnout",
    emoji: "🔥",
    desc: "Overcoming exhaustion, dissatisfaction, and professional stress.",
  },
  {
    title: "Trauma & PTSD",
    emoji: "💣",
    desc: "Healing from past events, emotional flashbacks, or fear responses.",
  },
  {
    title: "Self-Esteem",
    emoji: "🪞",
    desc: "Build confidence, self-worth, and inner trust.",
  },
  {
    title: "LGBTQ+ Support",
    emoji: "🏳️‍🌈",
    desc: "Safe space for identity exploration, coming out, and acceptance.",
  },
  {
    title: "Family Therapy",
    emoji: "👨‍👩‍👧",
    desc: "Resolve conflicts, strengthen bonds, and improve understanding.",
  },
  {
    title: "Teen Counseling",
    emoji: "🧒",
    desc: "Guidance for adolescence, identity, and peer pressure.",
  },
  {
    title: "Addiction Recovery",
    emoji: "🍷",
    desc: "Support for substance use, recovery, and relapse prevention.",
  },
  {
    title: "Sleep Disorders",
    emoji: "💤",
    desc: "Break cycles of insomnia, nightmares, or restless sleep.",
  },
  {
    title: "OCD & Intrusive Thoughts",
    emoji: "🔄",
    desc: "Manage compulsions, rituals, and unwanted thoughts.",
  },
  {
    title: "Anger Management",
    emoji: "😡",
    desc: "Learn to express anger constructively and avoid outbursts.",
  },
  {
    title: "Grief & Loss",
    emoji: "🕊️",
    desc: "Find support through death, separation, or personal loss.",
  },
];

export default function TherapyCategories() {
  return (
    <section className="w-full py-16 space-y-10 bg-muted/40 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Explore Our Therapy Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base sm:text-lg"
        >
          We offer personalized support across a wide range of mental health needs. Whether you're struggling with stress, identity, grief, or something in between — there's a category here for you.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-background rounded-lg shadow p-6 flex flex-col"
          >
            <div className="text-4xl mb-2">{cat.emoji}</div>
            <h3 className="font-semibold text-lg mb-1 text-foreground">
              {cat.title}
            </h3>
            <p className="text-sm text-muted-foreground">{cat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
