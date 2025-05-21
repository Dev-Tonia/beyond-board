"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface NavListTileProps {
  title: string;
  href: string;
  scrolled: boolean;
  isHome?: boolean;
  onClick?: () => void;
}

export default function NavListTile({
  title,
  href,
  scrolled,
  isHome,
  onClick,
}: Readonly<NavListTileProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={clsx(
        scrolled || !isHome ? " " : "bg-[#49494780] rounded",
        "2xl:p-4 p-3",
        isActive && "border-b-2 border-neutral-50"
      )}
    >
      <Link
        href={href}
        className={clsx(
          "text-neutral-50 xl:text-sm 2xl:text-lg transition-colors",
          isActive ? "text-neutral-50 font-semibold" : "hover:text-neutral-200"
        )}
      >
        {title}
      </Link>
    </li>
  );
}
