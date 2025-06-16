"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BottomCTA() {
  return (
    <div className="text-center mt-10 border-t pt-10 space-y-4">
      <h3 className="text-xl font-semibold">
        Want to share your voice?
      </h3>
      <p className="text-muted-foreground text-sm">
        Whether you’re a client, a doctor, or just passionate about mental health — your story matters.
      </p>
      <Link href="/blog/submit">
        <Button size="lg">Write a Blog</Button>
      </Link>
    </div>
  );
}
