import React from "react";
import { cn } from "@/common/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "plain" | "outlined" | "contained";
  fullWidth?: boolean;
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  children,
  color = "default",
  size = "md",
  variant = "contained",
  disabled = false,
  fullWidth = false,
  className,
  asChild = false,
  ref,
  onClick,
  ...rest
}: Props) => {
  const baseClasses = "border-box inline-flex items-center justify-center rounded-md";
  const isInteractive = !disabled;

  const colorClasses = {
    default: {
      contained: "bg-zinc-300 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 shadow-sm",
      outlined: "border border-zinc-200 text-zinc-900 dark:border-zinc-600 dark:text-zinc-100 shadow-sm",
      plain: "text-zinc-900 dark:text-zinc-100 shadow-none",
    },
    primary: {
      contained: "bg-primary text-zinc-50 dark:bg-primary-darker shadow-sm dark:text-zinc-100",
      outlined: "border border-primary text-primary dark:border-primary-darker dark:text-primary-darker shadow-sm",
      plain: "text-primary dark:text-primary-darker shadow-none",
    },
    success: {
      contained: "bg-success text-zinc-50 dark:bg-success-darker shadow-sm",
      outlined: "border border-success text-success dark:border-success-darker dark:text-success-darker shadow-sm",
      plain: "text-success dark:text-success-darker shadow-none",
    },
    warning: {
      contained: "bg-warning text-zinc-50 dark:bg-warning-darker shadow-sm",
      outlined: "border border-warning text-warning dark:border-warning-darker dark:text-warning-darker shadow-sm",
      plain: "text-warning dark:text-warning-darker shadow-none",
    },
    error: {
      contained: "bg-error text-zinc-50 dark:bg-error-darker shadow-sm",
      outlined: "border border-error text-error dark:border-error-darker dark:text-error-darker shadow-sm",
      plain: "text-error dark:text-error-darker shadow-none",
    },
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1 h-8",
    md: "text-sm px-3 py-2 h-9",
    lg: "text-base px-4 py-2 h-11",
  };
  const interactiveClasses = isInteractive ? "cursor-pointer hover:opacity-80" : "opacity-60 cursor-not-allowed shadow-none";
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
    <button ref={ref} className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default React.forwardRef((props: Props, ref: React.Ref<HTMLButtonElement>) => <Button {...props} ref={ref} />);
