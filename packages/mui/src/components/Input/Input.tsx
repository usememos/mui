import React from "react";
import { cn } from "@/common/utils";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
  size = "md",
  className,
  disabled = false,
  fullWidth = false,
  startDecorator,
  endDecorator,
  onChange,
  ref,
  ...rest
}: Props) => {
  const isInteractive = !disabled;

  const sizeClasses = {
    sm: "text-sm px-2 py-1 h-8",
    md: "text-base px-3 py-2 h-9",
    lg: "text-lg px-4 py-2 h-11",
  };
  const paddingClasses = {
    left: {
      sm: startDecorator ? "pl-6" : "pl-2",
      md: startDecorator ? "pl-8" : "pl-3",
      lg: startDecorator ? "pl-10" : "pl-4",
    },
    right: {
      sm: endDecorator ? "pr-6" : "pr-2",
      md: endDecorator ? "pr-8" : "pr-3",
      lg: endDecorator ? "pr-10" : "pr-4",
    },
  };

  return (
    <div
      className={cn(
        "relative flex items-center box-border border rounded-md shadow-sm focus-within:ring-1 focus-within:ring-primary focus-within:border-primary",
        sizeClasses[size],
        "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800 dark:focus-within:ring-primary-darker dark:focus-within:border-primary-darker",
        {
          "cursor-not-allowed opacity-50": !isInteractive,
          "w-full": fullWidth,
        },
        paddingClasses.left[size],
        paddingClasses.right[size],
        className
      )}
    >
      {startDecorator && <div className={`absolute left-0 pl-${size === "sm" ? 1 : size === "md" ? 2 : 3}`}>{startDecorator}</div>}
      <input
        ref={ref}
        onChange={(e) => {
          if (isInteractive && onChange) {
            onChange(e);
          }
        }}
        disabled={disabled}
        className="focus:outline-none w-full h-full bg-transparent"
        {...rest}
      />
      {endDecorator && <div className={`absolute right-0 pr-${size === "sm" ? 1 : size === "md" ? 2 : 3}`}>{endDecorator}</div>}
    </div>
  );
};

Input.displayName = "Input";

export default React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => <Input {...props} ref={ref} />);
