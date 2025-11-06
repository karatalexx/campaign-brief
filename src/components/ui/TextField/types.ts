import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "ref">;
