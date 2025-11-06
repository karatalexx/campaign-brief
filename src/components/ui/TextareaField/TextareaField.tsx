"use client";

import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { TextareaFieldProps } from "./types";

export default function TextareaField(props: TextareaFieldProps) {
  const { label, id, name, required, className, disabled, ...rest } = props;
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
      <textarea
        id={id}
        disabled={disabled}
        className={clsx(
          "rounded border border-black/8 dark:border-white/[.145] px-3 py-2 bg-transparent outline-none min-h-24 resize-y disabled:opacity-60 disabled:cursor-not-allowed",
          className,
        )}
        {...field}
        {...rest}
      />
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
