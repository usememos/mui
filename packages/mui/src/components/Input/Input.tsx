import React from "react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
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
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  const inputSizeClasses = {
    sm: "text-sm px-2",
    md: "text-sm px-2",
    lg: "text-base px-3",
  };

  return (
    <div
      className={cn(
        "flex items-center box-border rounded-lg border-2 border-zinc-100 dark:border-zinc-700",
        "bg-zinc-100 dark:bg-zinc-700",
        "dark:text-zinc-200",
        "focus-within:bg-white dark:focus-within:bg-zinc-900",
        {
          "cursor-not-allowed opacity-50": !isInteractive,
          "w-full": fullWidth,
        },
        sizeClasses[size],
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
        className={cn("outline-none w-full bg-transparent", inputSizeClasses[size])}
        {...rest}
      />
      {endDecorator && <div className="mr-2 shrink-0">{endDecorator}</div>}
    </div>
  );
};

export default Input;
