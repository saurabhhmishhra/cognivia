"use client";

import Footer from "@/components/Footer";
import AnonPostList from "@/components/help/AnonPostList";
import HelpHero from "@/components/help/HelpHero";
import HelpPostList from "@/components/help/HelpPostList";




export default function HelpPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <HelpHero/>
      <AnonPostList/>
      <HelpPostList/>
    </main>
  );
}
