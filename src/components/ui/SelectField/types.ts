import { SelectHTMLAttributes } from "react";

export type SelectOption = { value: string; label: string };

export type SelectFieldProps = {
  label: string;
  id: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  className?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "ref">;
