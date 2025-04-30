import "./globals.css";
import {
  Plus_Jakarta_Sans,
  Outfit,
  Montserrat,
  Sniglet,
} from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const sniglet = Sniglet({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-sniglet",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${outfit.variable} ${montserrat.variable} ${sniglet.variable} font-jakarta`}
      >
        {children}
      </body>
    </html>
  );
}
