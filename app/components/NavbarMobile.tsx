"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {open && (
        <div className="absolute z-20 bg-[#003FCC] rounded-xl p-4 shadow-xl right-4 top-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "block px-4 py-2 rounded-full text-sm font-medium transition",
                pathname === item.href
                  ? "bg-white text-[#0052FF]"
                  : "text-white hover:bg-white/20"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
