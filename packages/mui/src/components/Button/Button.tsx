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
  const baseClasses = "inline-flex items-center justify-center rounded-md transition-all duration-200";
  const isInteractive = !disabled;

  const colorClasses = {
    default: {
      contained: "bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100 shadow-sm",
      outlined: "border border-gray-200 text-gray-900 dark:border-gray-600 dark:text-gray-100 shadow-sm",
      plain: "text-gray-900 dark:text-gray-100 shadow-none",
    },
    primary: {
      contained: "bg-blue-500 text-white dark:bg-blue-700 shadow-sm dark:text-white",
      outlined: "border border-blue-500 text-blue-500 dark:border-blue-700 dark:text-blue-700 shadow-sm",
      plain: "text-blue-500 dark:text-blue-700 shadow-none",
    },
    success: {
      contained: "bg-green-500 text-white dark:bg-green-700 shadow-sm",
      outlined: "border border-green-500 text-green-500 dark:border-green-700 dark:text-green-700 shadow-sm",
      plain: "text-green-500 dark:text-green-700 shadow-none",
    },
    warning: {
      contained: "bg-yellow-500 text-white dark:bg-yellow-700 shadow-sm",
      outlined: "border border-yellow-500 text-yellow-500 dark:border-yellow-700 dark:text-yellow-700 shadow-sm",
      plain: "text-yellow-500 dark:text-yellow-700 shadow-none",
    },
    error: {
      contained: "bg-red-500 text-white dark:bg-red-700 shadow-sm",
      outlined: "border border-red-500 text-red-500 dark:border-red-700 dark:text-red-700 shadow-sm",
      plain: "text-red-500 dark:text-red-700 shadow-none",
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
