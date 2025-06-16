"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dummy data for now — replace with real API later
const posts = [
  {
    id: "1",
    nickname: "ShadowMind",
    content:
      "I’ve been dealing with panic attacks in silence for years. Sharing this felt like a release.",
    date: "June 10, 2025",
  },
  {
    id: "2",
    nickname: "Anon123",
    content:
      "I’m in college, and sometimes the pressure feels unbearable. Just needed to put this out there.",
    date: "June 12, 2025",
  },
  {
    id: "3",
    nickname: "",
    content:
      "This is the first time I’ve ever talked about my childhood trauma. Thank you for this space.",
    date: "June 14, 2025",
  },
];

export default function HelpPostList() {
  return (
    <section className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center"
      >
        Recent Anonymous Posts
      </motion.h2>

      <div className="grid gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-muted p-6 rounded-lg shadow space-y-3"
          >
            <div className="text-sm text-muted-foreground">
              {post.nickname ? `Posted by ${post.nickname}` : "Anonymous"} • {post.date}
            </div>
            <p className="text-base text-foreground">{post.content}</p>
            <div className="flex gap-4 mt-4">
              <Link href={`/help/${post.id}`}>
                <Button size="sm">Comment</Button>
              </Link>
              <Button size="sm" variant="outline" disabled>
                Request to Connect
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
