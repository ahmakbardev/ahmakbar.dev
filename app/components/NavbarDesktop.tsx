"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolios", href: "/docs" },
  { label: "Achievement", href: "/achieve" },
  { label: "About", href: "/blog" },
];

export default function NavbarDesktop() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "hidden md:flex justify-center gap-4 transition-all duration-300",
        isScrolled
          ? "bg-white/10 backdrop-blur-lg rounded-full max-w-6xl px-6 py-3 mx-auto shadow-md"
          : "py-4"
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            "px-5 py-2 rounded-full font-medium transition-colors duration-300",
            pathname === item.href
              ? "bg-white text-[#0052FF]"
              : "text-white hover:bg-white/20 hover:text-white"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
