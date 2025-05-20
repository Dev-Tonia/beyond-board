import clsx from "clsx";
import React from "react";

export default function SixthHeading({
  title,
  className,
  textColor = "text-neutral-50",
}: Readonly<{ title: string; className?: string; textColor?: string }>) {
  return (
    <h6
      className={clsx(
        " text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold font-georgian ",
        className,
        textColor
      )}
    >
      {title}
    </h6>
  );
}
