"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What kind of therapy do you offer?",
    answer:
      "We offer cognitive-behavioral therapy, mindfulness-based therapy, and other evidence-based approaches tailored to each individual's needs."
  },
  {
    question: "Are online sessions as effective as in-person ones?",
    answer:
      "Yes. Online therapy has proven to be equally effective, especially when delivered consistently by certified professionals like ours."
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. We follow HIPAA and international data protection standards to ensure your privacy and confidentiality."
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session through our website using the booking calendar after logging in. We offer both subscription and pay-per-session options."
  },
  {
    question: "Can I reschedule or cancel appointments?",
    answer:
      "Yes. You can easily reschedule or cancel sessions up to 12 hours before the scheduled time through your client dashboard."
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
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
