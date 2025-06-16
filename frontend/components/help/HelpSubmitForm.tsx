"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function SubmitStoryForm() {
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔒 Send to backend anonymously
    console.log({ nickname, content });
    alert("Your story has been submitted anonymously.");
    setNickname("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 bg-muted p-6 rounded-md shadow"
    >
      <div>
        <label className="block mb-1 text-sm font-medium">Nickname (optional)</label>
        <Input
          placeholder="e.g. Silent Warrior"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Your Story *</label>
        <Textarea
          required
          rows={6}
          placeholder="Write about your experience, struggle, or thought..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg">
        Submit Anonymously
      </Button>
    </form>
  );
}
