// import Image from "next/image";
// import styles from "./page.module.css";

import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Hero/>
      <Hero/> */}
      <FeatureSection />
      <Showcase />
    </>
  );
}
