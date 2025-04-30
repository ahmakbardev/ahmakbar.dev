import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import LayoutClientWrapper from "./LayoutClientWrapper";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params); // ✅ FIX HERE
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LayoutClientWrapper>{children}</LayoutClientWrapper>
    </NextIntlClientProvider>
  );
}
