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
      onClick,
      asChild = false,
      ...rest
    }: Props,
    ref
  ) => {
    const baseClasses = "border-box inline-flex items-center justify-center rounded-md";
    const isInteractive = !disabled;

    const colorClasses = {
      default: {
        contained: cn(
          "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 shadow",
          isInteractive && "hover:bg-zinc-400 dark:hover:bg-zinc-800"
        ),
        outlined: cn(
          "border border-zinc-200 text-zinc-900 dark:border-zinc-600 dark:text-zinc-100 shadow",
          isInteractive && "hover:bg-zinc-200 dark:hover:bg-zinc-700"
        ),
        plain: cn("text-zinc-900 dark:text-zinc-100 shadow-none", isInteractive && "hover:bg-zinc-200 dark:hover:bg-zinc-700"),
      },
      primary: {
        contained: cn(
          "bg-primary text-zinc-50 dark:bg-primary-darker shadow",
          isInteractive && "hover:bg-primary-dark dark:hover:bg-primary-darkest"
        ),
        outlined: cn(
          "border border-primary text-primary dark:border-primary-darker dark:text-primary-darker shadow",
          isInteractive && "hover:bg-primary-light hover:bg-opacity-10 dark:hover:bg-primary-darker dark:hover:bg-opacity-20"
        ),
        plain: cn(
          "text-primary dark:text-primary-darker shadow-none",
          isInteractive && "hover:bg-primary-light hover:bg-opacity-10 dark:hover:bg-primary-darker dark:hover:bg-opacity-20"
        ),
      },
      success: {
        contained: cn(
          "bg-success text-zinc-50 dark:bg-success-darker shadow",
          isInteractive && "hover:bg-success-dark dark:hover:bg-success-darkest"
        ),
        outlined: cn(
          "border border-success text-success dark:border-success-darker dark:text-success-darker shadow",
          isInteractive && "hover:bg-success-light hover:bg-opacity-10 dark:hover:bg-success-darker dark:hover:bg-opacity-20"
        ),
        plain: cn(
          "text-success dark:text-success-darker shadow-none",
          isInteractive && "hover:bg-success-light hover:bg-opacity-10 dark:hover:bg-success-darker dark:hover:bg-opacity-20"
        ),
      },
      warning: {
        contained: cn(
          "bg-warning text-zinc-50 dark:bg-warning-darker shadow",
          isInteractive && "hover:bg-warning-dark dark:hover:bg-warning-darkest"
        ),
        outlined: cn(
          "border border-warning text-warning dark:border-warning-darker dark:text-warning-darker shadow",
          isInteractive && "hover:bg-warning-light hover:bg-opacity-10 dark:hover:bg-warning-darker dark:hover:bg-opacity-20"
        ),
        plain: cn(
          "text-warning dark:text-warning-darker shadow-none",
          isInteractive && "hover:bg-warning-light hover:bg-opacity-10 dark:hover:bg-warning-darker dark:hover:bg-opacity-20"
        ),
      },
      error: {
        contained: cn(
          "bg-error text-zinc-50 dark:bg-error-darker shadow",
          isInteractive && "hover:bg-error-dark dark:hover:bg-error-darkest"
        ),
        outlined: cn(
          "border border-error text-error dark:border-error-darker dark:text-error-darker shadow",
          isInteractive && "hover:bg-error-light hover:bg-opacity-10 dark:hover:bg-error-darker dark:hover:bg-opacity-20"
        ),
        plain: cn(
          "text-error dark:text-error-darker shadow-none",
          isInteractive && "hover:bg-error-light hover:bg-opacity-10 dark:hover:bg-error-darker dark:hover:bg-opacity-20"
        ),
      },
    };

    const sizeClasses = {
      sm: "text-xs px-2 py-1 h-8",
      md: "text-sm px-3 py-2 h-9",
      lg: "text-base px-4 py-2 h-11",
    };

    const disabledClasses = "opacity-50 cursor-not-allowed shadow-none";
    const buttonClasses = cn(baseClasses, colorClasses[color][variant], sizeClasses[size], className, {
      [disabledClasses]: disabled,
      "bg-transparent": variant === "plain",
      "w-full": fullWidth,
    });

    if (asChild && React.isValidElement(children)) {
      const element = children as React.ReactElement;
      return React.cloneElement(element, {
        className: cn(buttonClasses, element.props.className),
        onClick,
        disabled,
        ...rest,
      });
    }

    return (
      <button ref={ref} className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default React.memo(Button);
