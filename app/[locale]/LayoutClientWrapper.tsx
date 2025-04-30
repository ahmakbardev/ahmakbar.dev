"use client";

import { useLocale, useMessages, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routing } from "@/lib/routing";
import type { Locale } from "@/lib/routing";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale() as Locale;
  const messages = useMessages();

  if (!routing.locales.includes(locale)) notFound();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SmoothScroll />
      <Header />
      <div className="-top-[77px] bg-[#0052FF]">{children}</div>
      <Footer />
    </NextIntlClientProvider>
  );
}
