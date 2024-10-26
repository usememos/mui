import clsx from "clsx";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "plain" | "outlined" | "contained";
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
    }: ButtonProps,
    ref
  ) => {
    const baseClasses = "border-box inline-flex items-center justify-center rounded-md";
    const isInteractive = !disabled;

    const colorClasses = {
      default: {
        contained: clsx(
          "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 shadow",
          isInteractive && "hover:bg-zinc-400 dark:hover:bg-zinc-800"
        ),
        outlined: clsx(
          "border border-zinc-200 text-zinc-900 dark:border-zinc-600 dark:text-zinc-100 shadow",
          isInteractive && "hover:bg-zinc-200 dark:hover:bg-zinc-700"
        ),
        plain: clsx("text-zinc-900 dark:text-zinc-100 shadow-none", isInteractive && "hover:bg-zinc-200 dark:hover:bg-zinc-700"),
      },
      primary: {
        contained: clsx(
          "bg-primary text-zinc-50 dark:bg-primary-darker shadow",
          isInteractive && "hover:bg-primary-dark dark:hover:bg-primary-darkest"
        ),
        outlined: clsx(
          "border border-primary text-primary dark:border-primary-darker dark:text-primary-darker shadow",
          isInteractive && "hover:bg-primary-light hover:bg-opacity-10 dark:hover:bg-primary-darker dark:hover:bg-opacity-20"
        ),
        plain: clsx(
          "text-primary dark:text-primary-darker shadow-none",
          isInteractive && "hover:bg-primary-light hover:bg-opacity-10 dark:hover:bg-primary-darker dark:hover:bg-opacity-20"
        ),
      },
      success: {
        contained: clsx(
          "bg-success text-zinc-50 dark:bg-success-darker shadow",
          isInteractive && "hover:bg-success-dark dark:hover:bg-success-darkest"
        ),
        outlined: clsx(
          "border border-success text-success dark:border-success-darker dark:text-success-darker shadow",
          isInteractive && "hover:bg-success-light hover:bg-opacity-10 dark:hover:bg-success-darker dark:hover:bg-opacity-20"
        ),
        plain: clsx(
          "text-success dark:text-success-darker shadow-none",
          isInteractive && "hover:bg-success-light hover:bg-opacity-10 dark:hover:bg-success-darker dark:hover:bg-opacity-20"
        ),
      },
      warning: {
        contained: clsx(
          "bg-warning text-zinc-50 dark:bg-warning-darker shadow",
          isInteractive && "hover:bg-warning-dark dark:hover:bg-warning-darkest"
        ),
        outlined: clsx(
          "border border-warning text-warning dark:border-warning-darker dark:text-warning-darker shadow",
          isInteractive && "hover:bg-warning-light hover:bg-opacity-10 dark:hover:bg-warning-darker dark:hover:bg-opacity-20"
        ),
        plain: clsx(
          "text-warning dark:text-warning-darker shadow-none",
          isInteractive && "hover:bg-warning-light hover:bg-opacity-10 dark:hover:bg-warning-darker dark:hover:bg-opacity-20"
        ),
      },
      error: {
        contained: clsx(
          "bg-error text-zinc-50 dark:bg-error-darker shadow",
          isInteractive && "hover:bg-error-dark dark:hover:bg-error-darkest"
        ),
        outlined: clsx(
          "border border-error text-error dark:border-error-darker dark:text-error-darker shadow",
          isInteractive && "hover:bg-error-light hover:bg-opacity-10 dark:hover:bg-error-darker dark:hover:bg-opacity-20"
        ),
        plain: clsx(
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
    const buttonClasses = twMerge(
      clsx(baseClasses, colorClasses[color][variant], sizeClasses[size], className, {
        [disabledClasses]: disabled,
        "bg-transparent": variant === "plain",
        "w-full": fullWidth,
      })
    );

    if (asChild && React.isValidElement(children)) {
      const element = children as React.ReactElement;
      return React.cloneElement(element, {
        className: clsx(buttonClasses, element.props.className),
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
