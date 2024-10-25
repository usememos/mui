import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  variant?: "text" | "outlined" | "contained";
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "default",
  size = "md",
  variant = "contained",
  disabled = false,
  startDecorator,
  endDecorator,
  className,
  onClick,
  ...rest
}) => {
  const baseClasses = "inline-flex items-center rounded-md";

  const colorClasses = {
    default: {
      contained: "bg-gray-200 text-black hover:bg-gray-300",
      outlined: "border border-gray-300 text-black hover:bg-gray-100",
      text: "text-black hover:bg-gray-100",
    },
    primary: {
      contained: "bg-primary text-white hover:bg-primary-dark",
      outlined: "border border-primary text-primary hover:bg-primary-light hover:bg-opacity-10",
      text: "text-primary hover:bg-primary-light hover:bg-opacity-10",
    },
    success: {
      contained: "bg-success text-white hover:bg-success-dark",
      outlined: "border border-success text-success hover:bg-success-light hover:bg-opacity-10",
      text: "text-success hover:bg-success-light hover:bg-opacity-10",
    },
    warning: {
      contained: "bg-warning text-white hover:bg-warning-dark",
      outlined: "border border-warning text-warning hover:bg-warning-light hover:bg-opacity-10",
      text: "text-warning hover:bg-warning-light hover:bg-opacity-10",
    },
    error: {
      contained: "bg-error text-white hover:bg-error-dark",
      outlined: "border border-error text-error hover:bg-error-light hover:bg-opacity-10",
      text: "text-error hover:bg-error-light hover:bg-opacity-10",
    },
  };

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const buttonClasses = clsx(baseClasses, colorClasses[color][variant], sizeClasses[size], className, {
    "opacity-50 cursor-not-allowed": disabled,
    "bg-transparent": variant === "text",
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {startDecorator && <span className="mr-2">{startDecorator}</span>}
      {children}
      {endDecorator && <span className="ml-2">{endDecorator}</span>}
    </button>
  );
};

export default Button;
