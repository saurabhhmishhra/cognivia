"use client";

import About from "@/components/About";
import AnonymousHelp from "@/components/AnonymousHelp";
import Certifications from "@/components/Certifications";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Certifications/>
      <About/>
      <Services/>
      <AnonymousHelp/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <LatestBlogs/>
      <CTA/>
      <Footer/>
      {/* Other sections like <Services />, <Testimonials />, etc. can follow here */}
    </main>
  );
}
