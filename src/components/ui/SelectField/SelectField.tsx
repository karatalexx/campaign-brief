"use client";

import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { SelectFieldProps } from "./types";

export default function SelectField(props: SelectFieldProps) {
  const { label, id, name, options, required, className, disabled, ...rest } =
    props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      <select
        id={id}
        disabled={disabled}
        className={clsx(
          "rounded border px-3 py-2 bg-transparent outline-none disabled:opacity-60 disabled:cursor-not-allowed",
          error ? "border-red-500" : "border-black/8 dark:border-white/[.145]",
          className,
        )}
        {...field}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <p
        className={clsx(
          "text-xs min-h-6",
          error?.message ? "text-red-600" : "text-transparent",
        )}
      >
        {error?.message}
      </p>
    </div>
  );
}
