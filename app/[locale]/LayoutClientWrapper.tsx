"use client";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { routing } from "@/lib/routing";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  console.log("🔤 Active locale from client:", locale);

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  return (
    <>
      <SmoothScroll />
      <Header />
      <div className="-top-[77px] bg-[#0052FF]">{children}</div>
      <Footer />
    </>
  );
}
