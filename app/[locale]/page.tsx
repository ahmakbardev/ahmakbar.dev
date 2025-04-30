import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import TestimonialGrid from "./components/Testimoni";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FeatureSection />
      <Showcase />
      <TestimonialGrid />
    </div>
  );
}
