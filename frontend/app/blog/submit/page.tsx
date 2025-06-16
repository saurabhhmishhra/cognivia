"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SubmitBlogPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Blog submitted for review!");
    router.push("/blog");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Submit a Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="Blog title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input
          name="summary"
          placeholder="Short summary"
          value={form.summary}
          onChange={handleChange}
          required
        />
        <Textarea
          name="content"
          placeholder="Full blog content..."
          value={form.content}
          onChange={handleChange}
          rows={8}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
