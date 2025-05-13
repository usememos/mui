import React from "react";
import { cn } from "@/common/utils";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  size = "md",
  className,
  disabled = false,
  fullWidth = false,
  startDecorator,
  endDecorator,
  onChange,
  ...rest
}: Props) => {
  const isInteractive = !disabled;

  const sizeClasses = {
    sm: "h-8 px-2",
    md: "h-9 px-3",
    lg: "h-11 px-4",
  };

  const inputSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={cn(
        "flex items-center box-border border rounded-md shadow-sm",
        "focus-within:ring-1 focus-within:ring-primary focus-within:border-primary",
        "dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800",
        "dark:focus-within:ring-primary-darker dark:focus-within:border-primary-darker",
        {
          "cursor-not-allowed opacity-50": !isInteractive,
          "w-full": fullWidth,
        },
        className
      )}
    >
      {startDecorator && <div className="ml-2 shrink-0">{startDecorator}</div>}
      <input
        onChange={(e) => {
          if (isInteractive && onChange) {
            onChange(e);
          }
        }}
        disabled={disabled}
        className={cn(
          "focus:outline-none w-full bg-transparent",
          sizeClasses[size],
          inputSizeClasses[size]
        )}
        {...rest}
      />
      {endDecorator && <div className="mr-2 shrink-0">{endDecorator}</div>}
    </div>
  );
};

export default Input;
