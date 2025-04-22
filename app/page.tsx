// import Image from "next/image";
// import styles from "./page.module.css";

import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import TestimonialGrid from "./components/Testimoni";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      {/* <Hero/>
      <Hero/> */}
      <FeatureSection />
      <Showcase />
      <TestimonialGrid />
    </div>
  );
}
