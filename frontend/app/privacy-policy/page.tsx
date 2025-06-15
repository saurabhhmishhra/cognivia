"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import ReactMarkdown from "react-markdown";

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/docs/privacy-policy.md")
      .then(res => res.text())
      .then(setContent);
  }, []);

  return (
    <section className="py-16">
      <Container className="prose dark:prose-invert max-w-4xl">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </section>
  );
}
