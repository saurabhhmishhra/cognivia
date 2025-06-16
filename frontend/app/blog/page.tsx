"use client";

import { useState } from "react";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPagination from "@/components/blog/BlogPagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BottomCTA from "@/components/blog/BottomCTA";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <BlogHeader
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <BlogList filter={filter} sortBy={sortBy} />

      <BlogPagination />

      {/* Bottom CTA */}
      <BottomCTA/>
      <Footer/>
    </main>
  );
}
