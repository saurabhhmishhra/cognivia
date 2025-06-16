"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    category: "Individual Plans",
    items: [
      {
        title: "One-Time Session",
        for: "Great for trying therapy or occasional sessions.",
        price: "₹1499 / $30",
        note: "₹799 for first-time users",
        features: [
          "60-minute session",
          "Video / Offline available",
          "Free therapist matching"
        ],
      },
      {
        title: "Monthly Plan",
        for: "Best for regular therapy seekers.",
        price: "₹3999 / $75",
        features: [
          "4 sessions/month",
          "Priority scheduling",
          "Ongoing therapist chat",
        ],
      },
      {
        title: "Yearly Plan",
        for: "Perfect for long-term care and savings.",
        price: "₹27999 / $499",
        features: [
          "48 sessions/year",
          "Personal psychologist assigned",
          "Dedicated monthly progress tracking",
        ],
      },
    ],
  },
  {
    category: "Couple Therapy",
    items: [
      {
        title: "Single Session",
        for: "Conflict resolution or emotional reconnection.",
        price: "₹2499 / $45",
        features: [
          "60-minute couple session",
          "Tailored relationship focus",
          "In-person / Video supported",
        ],
      },
      
      {
        title: "Monthly Plan",
        for: "Improve communication & bond long-term.",
        price: "₹7999 / $150",
        features: [
          "4 sessions/month",
          "Flexible rescheduling",
          "Couple growth activities",
        ],
      },
      {
        title: "3-Month Plan",
        for: "Build stronger emotional understanding over time.",
        price: "₹21999 / $390",
        features: [
          "12 sessions total",
          "Guided couple exercises",
          "Therapist follow-up",
        ],
      },
    ],
  },
  {
    category: "Family Therapy",
    items: [
      {
        title: "Starter (2 Members)",
        for: "Parents & child / siblings.",
        price: "₹6999 / $130",
        features: [
          "4 shared sessions/month",
          "Individual + joint sessions",
          "Trust-building focus",
        ],
      },
      {
        title: "Full Plan (Up to 5 Members)",
        for: "Comprehensive family counseling.",
        price: "₹13999 / $249",
        features: [
          "8 sessions/month",
          "All family members included",
          "Crisis & routine support",
        ],
      },
    ],
  },
  {
    category: "Add-On Specialties",
    items: [
      {
        title: "Teen Counseling",
        for: "Support for school stress, identity, anxiety.",
        price: "₹1699 / $32",
        features: [
          "50-minute teen-focused session",
          "Parental feedback summary",
          "Online or in-clinic",
        ],
      },
      {
        title: "Trauma Recovery",
        for: "Past abuse, PTSD, or unresolved events.",
        price: "₹1899 / $36",
        features: [
          "EMDR/CBT based session",
          "Safe, non-judgmental space",
          "Progress tracking included",
        ],
      },
      {
        title: "Anger Management",
        for: "Learn emotional regulation strategies.",
        price: "₹1599 / $29",
        features: [
          "Triggers and behavior mapping",
          "Personalized coping tools",
          "Progress-tracked sessions",
        ],
      },
      {
        title: "Sleep Therapy",
        for: "Resolve insomnia and restless sleep.",
        price: "₹1499 / $27",
        features: [
          "Sleep hygiene assessment",
          "Cognitive restructuring",
          "Custom bedtime strategies",
        ],
      },
      {
        title: "Grief Support",
        for: "Navigate loss and emotional trauma.",
        price: "₹1599 / $30",
        features: [
          "1:1 grief sessions",
          "Emotion expression methods",
          "Memory healing techniques",
        ],
      },
      {
        title: "OCD Management",
        for: "Obsessions, compulsions, intrusive thoughts.",
        price: "₹1899 / $35",
        features: [
          "ERP and CBT techniques",
          "Progressive exposure",
          "Session recordings (on request)",
        ],
      },
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="space-y-14">
      {plans.map((planGroup, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-primary">{planGroup.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {planGroup.items.map((plan, idx) => (
              <div
                key={idx}
                className="bg-muted p-6 rounded-lg shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.for}</p>
                  <div className="text-2xl font-bold text-primary">{plan.price}</div>
                  {plan.note && (
                    <p className="text-sm text-green-600 italic">{plan.note}</p>
                  )}
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full">Choose Plan</Button>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
