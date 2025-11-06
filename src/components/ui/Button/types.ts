import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "contained" | "text";
  disabled?: boolean;
};

export type ButtonTagProps = ButtonBaseProps &
  ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>);

export type AnchorTagProps = ButtonBaseProps &
  ({ as: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

export type ButtonProps = ButtonTagProps | AnchorTagProps;
