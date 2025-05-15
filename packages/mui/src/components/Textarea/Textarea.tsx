import React from "react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  rows?: number;
}

const Textarea: React.FC<Props> = ({ size = "md", className, disabled = false, fullWidth = false, rows = 3, onChange, ...rest }: Props) => {
  const isInteractive = !disabled;

  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "p-2 text-sm",
    lg: "p-3 text-base",
  };

  return (
    <textarea
      rows={rows}
      onChange={(e) => {
        if (isInteractive && onChange) {
          onChange(e);
        }
      }}
      disabled={disabled}
      className={cn(
        "block rounded-md border shadow-sm",
        "focus:outline-none focus-within:ring-1 focus-within:ring-primary focus-within:border-primary",
        "bg-white dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800",
        "dark:focus-within:ring-primary-darker dark:focus-within:border-primary-darker",
        {
          "cursor-not-allowed opacity-50": !isInteractive,
          "w-full": fullWidth,
        },
        sizeClasses[size],
        className
      )}
      {...rest}
    />
  );
};

export default Textarea;
