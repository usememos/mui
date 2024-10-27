import React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const Checkbox: React.FC<Props> = ({ size = "md", checked = false, className, disabled = false, onChange, label, ...rest }: Props) => {
  const isInteractive = !disabled;

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const baseClasses = "relative flex items-center justify-center border rounded gap-2";
  const interactiveClasses = isInteractive ? "cursor-pointer" : "";
  const checkedClasses = checked
    ? "bg-primary border-primary dark:bg-primary dark:border-primary"
    : "bg-white border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600";
  const labelClasses = cn("dark:text-zinc-100", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-lg");

  return (
    <label className="flex items-center gap-2">
      <div className={cn(baseClasses, sizeClasses[size], interactiveClasses, checkedClasses, className)}>
        {checked && <CheckIcon className="text-white dark:text-zinc-800" />}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            if (isInteractive && onChange) {
              onChange(e);
            }
          }}
          disabled={disabled}
          className="absolute opacity-0 inset-0 cursor-pointer"
          {...rest}
        />
      </div>
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
};

export default Checkbox;
