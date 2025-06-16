"use client";

import { motion } from "framer-motion";

const dummyPosts = [
  {
    id: "1",
    content: "I’ve been struggling with anxiety since college. Just writing it here helps me breathe a little easier.",
    comments: 5,
  },
  {
    id: "2",
    content: "I lost someone recently and don’t know how to process the grief. Any words would help.",
    comments: 3,
  },
  {
    id: "3",
    content: "My family doesn’t understand what I’m going through. It’s isolating.",
    comments: 2,
  },
];

export default function AnonPostList() {
  return (
    <div className="space-y-6">
      {dummyPosts.map((post) => (
        <motion.div
          key={post.id}
          whileHover={{ scale: 1.01 }}
          className="bg-muted p-6 rounded-md shadow"
        >
          <p className="text-muted-foreground text-sm mb-3">
            {post.content}
          </p>
          <p className="text-xs text-right text-primary font-medium">
            💬 {post.comments} comment{post.comments !== 1 ? "s" : ""}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
