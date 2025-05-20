import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export default function SecondHeading({
  title,
  className,
  textColor = "text-neutral-50",
  children,
}: PropsWithChildren<{
  title: string;
  className?: string;
  textColor?: string;
}>) {
  return (
    <h2
      className={clsx(
        "text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold font-georgian ",
        className,
        textColor
      )}
    >
      {children || title}
    </h2>
  );
}
