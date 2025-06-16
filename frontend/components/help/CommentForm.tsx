'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CommentForm({ postId }: { postId: string }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    alert("Comment submitted: " + comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="pt-6 space-y-4">
      <h4 className="font-medium">Add a Comment</h4>
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your thoughts..."
      />
      <Button type="submit">Comment</Button>
    </form>
  );
}
