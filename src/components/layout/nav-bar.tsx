"use client";

import React from "react";
import NavListTile from "./nav-list-tile";
import { navList } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useScroll } from "@/lib/hooks/useScroll";
import clsx from "clsx";

export default function NavBar({
  className = "bg-transparent",
  isHome = false,
}: {
  className?: string;
  isHome?: boolean;
}) {
  const router = useRouter();
  const scrolled = useScroll(50);
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <header
      className={clsx(
        "fixed top-0 z-50 left-0 right-0 transition-colors duration-300",
        scrolled ? "bg-tertiary" : className
      )}
    >
      <nav className=" wrapper  flex justify-between items-center  py-4">
        <div
          className=" text-neutral-50 w-fit cursor-pointer "
          onClick={handleNavigation}
        >
          <h1 className=" text-lg 2xl:text-2xl font-bold font-georgian leading-none ">
            Stories of highly educated Africa <br /> immigrants in America
          </h1>
        </div>
        <ul className="flex gap-2">
          {navList.map(({ title, href }) => (
            <NavListTile
              key={title}
              title={title}
              href={href}
              scrolled={scrolled}
              isHome={isHome}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
