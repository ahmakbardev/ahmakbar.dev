import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import TestimonialGrid from "./components/Testimoni";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function Page(props: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(props.params); // ✅ FIX here
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="overflow-x-hidden bg-[#0052FF]">
        <Hero />
        <FeatureSection />
        <Showcase />
        <TestimonialGrid />
      </div>
    </NextIntlClientProvider>
  );
}
