import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

import TestimonialCards from "@/components/TestimonialCards";

import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      
        <TestimonialCards />
      
    </main>
  );
}
