import clsx from "clsx";
import React from "react";
import { LoaderIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "plain" | "outlined" | "contained";
  loading?: boolean;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "default",
  size = "md",
  variant = "contained",
  loading = false,
  disabled = false,
  startDecorator,
  endDecorator,
  className,
  onClick,
  ...rest
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md";

  const colorClasses = {
    default: {
      contained: "bg-gray-200 text-black hover:bg-gray-300",
      outlined: "border border-gray-300 text-black hover:bg-gray-100",
      plain: "text-black hover:bg-gray-100",
    },
    primary: {
      contained: "bg-primary text-white hover:bg-primary-dark",
      outlined: "border border-primary text-primary hover:bg-primary-light hover:bg-opacity-10",
      plain: "text-primary hover:bg-primary-light hover:bg-opacity-10",
    },
    success: {
      contained: "bg-success text-white hover:bg-success-dark",
      outlined: "border border-success text-success hover:bg-success-light hover:bg-opacity-10",
      plain: "text-success hover:bg-success-light hover:bg-opacity-10",
    },
    warning: {
      contained: "bg-warning text-white hover:bg-warning-dark",
      outlined: "border border-warning text-warning hover:bg-warning-light hover:bg-opacity-10",
      plain: "text-warning hover:bg-warning-light hover:bg-opacity-10",
    },
    error: {
      contained: "bg-error text-white hover:bg-error-dark",
      outlined: "border border-error text-error hover:bg-error-light hover:bg-opacity-10",
      plain: "text-error hover:bg-error-light hover:bg-opacity-10",
    },
  };

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const loaderSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const buttonClasses = clsx(baseClasses, colorClasses[color][variant], sizeClasses[size], className, {
    "opacity-50 cursor-not-allowed": disabled || loading,
    "bg-transparent": variant === "plain",
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled || loading} {...rest}>
      {loading ? (
        <LoaderIcon className={clsx("animate-spin", loaderSizeClasses[size])} />
      ) : (
        <>
          {startDecorator && <span className="mr-1">{startDecorator}</span>}
          {children}
          {endDecorator && <span className="ml-1">{endDecorator}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
