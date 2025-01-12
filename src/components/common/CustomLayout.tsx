import { cn } from "@/lib/utils";
import React from "react";

const CustomLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn("w-[90%]", className)}>{children}</section>;
};

export default CustomLayout;
