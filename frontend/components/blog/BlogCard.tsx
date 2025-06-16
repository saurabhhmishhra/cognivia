"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type BlogCardProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
  authorRole: "Doctor" | "Client" | "Admin";
  date: string;
};

export default function BlogCard({
  id,
  title,
  summary,
  image,
  authorRole,
  date,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-muted rounded-lg shadow hover:shadow-md transition-all overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs uppercase text-muted-foreground tracking-wide mb-1">
          {authorRole} • {date}
        </span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground flex-grow">{summary}</p>
        <Link
          href={`/blog/${id}`}
          className="mt-4 text-sm text-primary hover:underline font-medium self-start"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
}
