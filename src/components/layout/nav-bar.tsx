"use client";

import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    router.push("/");
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 left-0 right-0 transition-colors duration-300",
        scrolled ? "bg-tertiary" : className
      )}
    >
      <nav className="wrapper flex justify-between items-center py-4">
        <div
          className="text-neutral-50 w-fit cursor-pointer"
          onClick={handleNavigation}
        >
          <h1 className="text-lg 2xl:text-2xl font-bold font-georgian leading-none">
            Stories of highly educated Africa <br /> immigrants in America
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex 2xl:gap-2">
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

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "fixed top-[72px] right-0 h-screen w-64 bg-tertiary transform transition-transform duration-300 ease-in-out lg:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col py-4">
            {navList.map(({ title, href }) => (
              // <li key={title} className="w-full">
              <NavListTile
                title={title}
                key={title}
                href={href}
                scrolled={scrolled}
                isHome={isHome}
                onClick={() => setIsOpen((prev) => !prev)}
              />
              // </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
