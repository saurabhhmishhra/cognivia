"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is online therapy as effective as in-person?",
    a: "Yes, research shows that online sessions can be just as effective, especially with video and chat support.",
  },
  {
    q: "How do I choose between online and offline sessions?",
    a: "If you're nearby, in-person may feel more connected. Online is great for flexibility and privacy.",
  },
  {
    q: "Are sessions confidential?",
    a: "Absolutely. All sessions follow HIPAA and strict data privacy standards.",
  },
  {
    q: "Can I switch from online to offline later?",
    a: "Yes, clients can choose or switch their session mode at any time.",
  },
  {
    q: "Is therapy available for children or teens?",
    a: "Yes, we offer age-appropriate therapy options including parental involvement.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <Container className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
