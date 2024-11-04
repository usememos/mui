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
    sm: "text-sm px-2 py-1 h-8",
    md: "text-base px-3 py-2 h-9",
    lg: "text-lg px-4 py-2 h-11",
  };

  return (
    <div
      className={cn(
        "flex items-center box-border border rounded-md shadow-sm",
        "focus-within:ring-1 focus-within:ring-primary focus-within:border-primary",
        sizeClasses[size],
        "dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800",
        "dark:focus-within:ring-primary-darker dark:focus-within:border-primary-darker",
        {
          "cursor-not-allowed opacity-50": !isInteractive,
          "w-full": fullWidth,
        },
        className
      )}
    >
      {startDecorator && <div className="mr-2 shrink-0">{startDecorator}</div>}
      <input
        onChange={(e) => {
          if (isInteractive && onChange) {
            onChange(e);
          }
        }}
        disabled={disabled}
        className="focus:outline-none w-full h-full grow bg-transparent"
        {...rest}
      />
      {endDecorator && <div className="ml-2 shrink-0">{endDecorator}</div>}
    </div>
  );
};

export default Input;
