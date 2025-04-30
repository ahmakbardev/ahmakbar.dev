"use client";

// import { useLocale } from "next-intl";
// import { notFound } from "next/navigation";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
// import { routing } from "@/lib/routing";
// import { getClientLocale } from "@/lib/i18n";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const locale = getClientLocale();
  //   console.log("📦 Client locale:", locale); // en / id

  return (
    <>
      <SmoothScroll />
      <Header />
      {children}
    </>
  );
}
