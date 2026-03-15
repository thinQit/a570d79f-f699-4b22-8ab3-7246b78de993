"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const badgeVariants = {
  default: "inline-flex items-center rounded-full bg-[#DDA15E] px-3 py-1 text-xs font-semibold text-[#722F37]",
  secondary: "inline-flex items-center rounded-full bg-[#FEFAE0] px-3 py-1 text-xs font-semibold text-[#722F37]",
  destructive: "inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white",
  outline: "inline-flex items-center rounded-full border border-[#DDA15E] px-3 py-1 text-xs font-semibold text-[#722F37] bg-transparent",
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants[variant], className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
