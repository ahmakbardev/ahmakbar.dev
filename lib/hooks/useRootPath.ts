"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useRootPath(path: string) {
  const pathname = usePathname();
  const rootLocale = pathname.split("/")[1];

  return useMemo(() => {
    if (["en", "id"].includes(rootLocale)) {
      return path; // tetap "/icons/hashtag.svg"
    }
    return path;
  }, [pathname, path]);
}
