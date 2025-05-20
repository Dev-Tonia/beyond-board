import clsx from "clsx";
import React, { PropsWithChildren } from "react";
interface CustomButtonProps {
  title?: string;
  onClick?: () => void;
  className?: string;
}
export default function CustomButton({
  title,
  children,
  className = "bg-primary text-white  hover:bg-primary/80",
  onClick,
}: PropsWithChildren<CustomButtonProps>) {
  return (
    <button
      className={clsx("px-8 py-3  transition-colors", className)}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
}
