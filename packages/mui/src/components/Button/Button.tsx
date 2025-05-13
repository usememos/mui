import React from "react";
import { cn } from "@/common/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "plain" | "outlined" | "contained";
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "default",
      size = "md",
      variant = "contained",
      disabled = false,
      fullWidth = false,
      className,
      asChild = false,
      onClick,
      ...rest
    }: Props,
    ref
  ) => {
    const baseClasses =
      "border-box inline-flex items-center justify-center rounded-md";
    const isInteractive = !disabled;

    const colorClasses = {
      default: {
        contained:
          "bg-zinc-300 text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-200",
        outlined:
          "border border-zinc-200 text-zinc-900 shadow-sm dark:border-zinc-600 dark:text-zinc-200",
        plain: "text-zinc-900 dark:text-zinc-200",
      },
      primary: {
        contained:
          "bg-primary text-zinc-50 shadow-sm dark:bg-primary-darker dark:text-zinc-200",
        outlined:
          "border border-primary text-primary shadow-sm dark:border-primary-darker dark:text-primary-darker",
        plain: "text-primary dark:text-primary-darker",
      },
      success: {
        contained:
          "bg-success text-zinc-50 shadow-sm dark:bg-success-darker dark:text-zinc-200",
        outlined:
          "border border-success text-success shadow-sm dark:border-success-darker dark:text-success-darker",
        plain: "text-success dark:text-success-darker",
      },
      warning: {
        contained:
          "bg-warning text-zinc-50 shadow-sm dark:bg-warning-darker dark:text-zinc-200",
        outlined:
          "border border-warning text-warning shadow-sm dark:border-warning-darker dark:text-warning-darker",
        plain: "text-warning dark:text-warning-darker",
      },
      error: {
        contained:
          "bg-error text-zinc-50 shadow-sm dark:bg-error-darker dark:text-zinc-200",
        outlined:
          "border border-error text-error shadow-sm dark:border-error-darker dark:text-error-darker",
        plain: "text-error dark:text-error-darker",
      },
    };

    const sizeClasses = {
      sm: "text-sm px-2 py-1 h-8",
      md: "text-sm px-3 py-2 h-9",
      lg: "text-base px-4 py-2 h-11",
    };
    const interactiveClasses = isInteractive
      ? "cursor-pointer hover:opacity-80"
      : "opacity-60 cursor-not-allowed shadow-none";
    const buttonClasses = cn(
      baseClasses,
      colorClasses[color][variant],
      sizeClasses[size],
      interactiveClasses,
      {
        "bg-transparent": variant === "plain",
        "w-full": fullWidth,
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      const element = children as React.ReactElement;
      return React.cloneElement(element, {
        className: cn(buttonClasses, element.props.className),
        ref,
        onClick,
        disabled,
        ...rest,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
