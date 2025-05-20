import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface NavListTileProps {
  title: string;
  href: string;
  scrolled: boolean;
  isHome?: boolean;
}

export default function NavListTile({
  title,
  href,
  scrolled,
  isHome,
}: Readonly<NavListTileProps>) {
  return (
    <li
      className={clsx(
        scrolled || !isHome ? " " : "bg-[#49494780]  rounded",
        "2xl:p-4 p-3"
      )}
    >
      <Link
        href={href}
        className="text-neutral-50 text-base 2xl:text-lg hover:text-neutral-200 transition-colors"
      >
        {title}
      </Link>
    </li>
  );
}
