import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export default function ThirdHeading({
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
    <h3
      className={clsx(
        " text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-6 font-bold font-georgian ",
        className,
        textColor
      )}
    >
      {children || title}
    </h3>
  );
}
