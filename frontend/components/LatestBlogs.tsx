"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "5 Signs You Might Need Therapy",
    excerpt:
      "Therapy isn't just for when things fall apart. Learn the early signs that suggest it's time to talk to someone.",
    slug: "5-signs-you-might-need-therapy",
    date: "June 10, 2025",
    image: "/blog/therapy-signs.jpg", // Replace with your actual image path
  },
  {
    title: "Dealing with Burnout: A Psychologist’s Guide",
    excerpt:
      "Burnout is real. Discover science-backed strategies to restore your energy and motivation.",
    slug: "dealing-with-burnout",
    date: "May 27, 2025",
    image: "/blog/burnout-guide.jpg",
  },
  {
    title: "Online vs In-Person Therapy: What’s Right for You?",
    excerpt:
      "Can virtual therapy be just as effective? Here's what you should consider before choosing.",
    slug: "online-vs-inperson-therapy",
    date: "May 15, 2025",
    image: "/blog/online-vs-inperson.jpg",
  },
];

export default function LatestBlogs() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <Container className="space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            From the Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            Expert insights, coping strategies, and mental health education — from our psychologists to you.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-background rounded-xl shadow-md border overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.date}</p>
                <p className="text-muted-foreground flex-grow">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium hover:underline mt-4"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/blog">View All Blogs</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
