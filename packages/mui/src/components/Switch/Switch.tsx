import React from "react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

const Switch: React.FC<Props> = ({ size = "md", checked = false, className, disabled = false, onChange, ...rest }: Props) => {
  const isInteractive = !disabled;

  const trackSizeClasses = {
    sm: "h-4 w-8",
    md: "h-5 w-10",
    lg: "h-6 w-12",
  };

  const thumbSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const thumbTranslateClasses = {
    sm: checked ? "translate-x-[18px]" : "translate-x-[2px]",
    md: checked ? "translate-x-[22px]" : "translate-x-[2px]",
    lg: checked ? "translate-x-[26px]" : "translate-x-[2px]",
  };

  const baseClasses = "relative inline-flex items-center rounded-full transition-colors duration-200";
  const interactiveClasses = isInteractive ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50";
  const checkedClasses = checked ? "bg-primary dark:bg-primary-darker" : "bg-zinc-300 dark:bg-zinc-600";

  return (
    <label className={cn(baseClasses, trackSizeClasses[size], checkedClasses, interactiveClasses, className)}>
      <div
        className={cn(
          "absolute bg-white rounded-full transition-transform duration-200 shadow-sm",
          thumbSizeClasses[size],
          thumbTranslateClasses[size]
        )}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          if (isInteractive && onChange) {
            onChange(e);
          }
        }}
        disabled={disabled}
        className="sr-only"
        {...rest}
      />
    </label>
  );
};

export default Switch;
