import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CategorySection from "@/components/home/CategorySection";
import BannerSection from "@/components/home/BannerSection";
import SaleSection from "@/components/home/SaleSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import InstagramSection from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. Animated Announcement Marquee */}
      <Marquee />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Shop by Category */}
      <CategorySection />

      {/* 4. Spring Sale Promo Banner */}
      <BannerSection />

      {/* 5. New Sale Section Products */}
      <SaleSection />

      {/* 6. Customer Love Stories */}
      <TestimonialSection />

      {/* 7. Features/Benefits Section */}
      <FeaturesSection />

      {/* 8. Instagram Grid */}
      <InstagramSection />
      
    </div>
  );
}