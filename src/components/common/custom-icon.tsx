import React from "react";
import { Icon } from "@iconify/react";
export default function customIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return <Icon icon={icon} className={className} />;
}
