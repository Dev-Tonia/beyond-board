import clsx from "clsx";
import React from "react";

export default function LeadingText({
  title,
  className = "text-neutral-50",
}: Readonly<{ title: string; className?: string }>) {
  return (
    <h1
      className={clsx(
        "text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold  font-georgian",
        className
      )}
    >
      {title}
    </h1>
  );
}
