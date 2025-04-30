// ✅ app/[locale]/layout.tsx
// import { getMessages } from "next-intl/server";
// import { NextIntlClientProvider } from "next-intl";
// import LayoutClientWrapper from "./LayoutClientWrapper";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

// SYNC WRAPPER - biar nggak kena error build
export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <Header />
      {children}
    </>
  );
}

// ASYNC INNER - aman, bisa await getMessages()
// async function LocaleLayoutInner({
//   children,
//   locale,
// }: {
//   children: React.ReactNode;
//   locale: string;
// }) {
//   const messages = await getMessages({ locale });

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <LayoutClientWrapper>{children}</LayoutClientWrapper>
//     </NextIntlClientProvider>
//   );
// }
