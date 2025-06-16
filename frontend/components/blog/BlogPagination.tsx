"use client";

import { Button } from "@/components/ui/button";

export default function BlogPagination() {
  return (
    <div className="flex justify-center items-center gap-4 pt-6 border-t mt-6">
      <Button variant="outline" disabled>← Previous</Button>
      <span className="text-sm text-muted-foreground">Page 1 of 5</span>
      <Button variant="outline">Next →</Button>
    </div>
  );
}
