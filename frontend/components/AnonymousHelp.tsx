"use client";

import { motion } from "framer-motion";
// import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function AnonymousHelp() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-100 dark:from-background dark:to-muted">
      <div className="max-w-7xl px-6 mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Anonymous Help & Healing
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Sometimes, opening up is easier without revealing your identity. Share your thoughts, connect with others, and find comfort in a safe, anonymous space — all without judgment.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Post Anonymously",
              desc: "Share your emotions, questions, or traumas without revealing who you are.",
            },
            {
              title: "Get Support",
              desc: "Receive comfort, comments, and encouragement from others in the community.",
            },
            {
              title: "Private Connection",
              desc: "Send a friend request and start a private chat — only if both users agree.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-muted p-8 rounded-lg shadow-md border"
            >
              <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <Button size="lg">Explore Anonymous Posts</Button>
          <Button size="lg" variant="outline">
            Share Anonymously
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
