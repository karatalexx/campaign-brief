"use client";

import clsx from "clsx";
import Link from "next/link";
import type { AnchorTagProps, ButtonProps, ButtonTagProps } from "./types";

export default function Button(props: ButtonProps) {
  const {
    as = "button",
    children,
    className,
    variant = "contained",
    disabled,
    ...rest
  } = props;

  const base =
    "text-base font-medium rounded transition-colors cursor-pointer whitespace-nowrap";
  const variants: Record<typeof variant, string> = {
    contained:
      "border border-black/8 dark:border-white/[.145] px-3 py-1.5 hover:bg-black/10 dark:hover:bg-white/10",
    text: "underline-offset-2 hover:underline px-1 py-0.5",
  } as const;

  const classes = clsx(
    base,
    variants[variant],
    className,
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
  );

  if (as === "a" && (props as AnchorTagProps).href) {
    return (
      <Link
        {...(rest as AnchorTagProps)}
        href={(props as AnchorTagProps).href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(rest as ButtonTagProps)}
    >
      {children}
    </button>
  );
}
