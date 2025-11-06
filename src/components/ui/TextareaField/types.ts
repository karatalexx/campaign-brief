import { TextareaHTMLAttributes } from "react";

export type TextareaFieldProps = {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  className?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "ref">;
