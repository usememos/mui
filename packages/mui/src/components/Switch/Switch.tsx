import React from "react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const Switch: React.FC<Props> = ({ size = "md", checked = false, className, disabled = false, onChange, label, ...rest }: Props) => {
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
    sm: checked ? "translate-x-4" : "translate-x-0.5",
    md: checked ? "translate-x-5" : "translate-x-0.5",
    lg: checked ? "translate-x-6" : "translate-x-0.5",
  };

  const labelSizeClasses = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
  };

  const baseClasses = "relative inline-flex items-center rounded-full transition-colors duration-200";
  const interactiveClasses = isInteractive ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50";
  const checkedClasses = checked
    ? "bg-primary dark:bg-primary-darker"
    : "bg-zinc-300 dark:bg-zinc-600";
  const labelClasses = cn("text-zinc-900 dark:text-zinc-200 select-none", labelSizeClasses[size]);

  return (
    <label className={cn("inline-flex items-center gap-2", interactiveClasses)}>
      <div className={cn(baseClasses, trackSizeClasses[size], checkedClasses, className)}>
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
      </div>
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
};

export default Switch;