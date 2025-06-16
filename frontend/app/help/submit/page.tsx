"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function HelpSubmitForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with actual POST logic (e.g., fetch to /api/help)
    console.log({ title, content });

    setTitle("");
    setContent("");
    alert("Post submitted anonymously!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Give your story a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="content">Your Story</Label>
        <Textarea
          id="content"
          placeholder="Write your thoughts, story or struggle here..."
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div className="text-right">
        <Button type="submit" size="lg">
          Submit Anonymously
        </Button>
      </div>
    </motion.form>
  );
}
