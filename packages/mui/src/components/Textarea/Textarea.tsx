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
        "block outline-none rounded-lg border-2 border-zinc-100 dark:border-zinc-700",
        "bg-zinc-100 dark:bg-zinc-700",
        "dark:text-zinc-200",
        "focus:bg-white dark:focus:bg-zinc-900",
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
