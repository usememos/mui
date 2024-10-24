import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outlined" | "soft" | "plain";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  loading = false,
  disabled = false,
  startDecorator,
  endDecorator,
  onClick,
}) => {
  const buttonClasses = clsx("inline-flex items-center justify-center font-medium focus:outline-none transition-colors duration-200", {
    // Variants
    "bg-blue-500 text-white hover:bg-blue-600": variant === "solid",
    "border border-blue-500 text-blue-500 hover:bg-blue-100": variant === "outlined",
    "bg-blue-100 text-blue-500 hover:bg-blue-200": variant === "soft",
    "text-blue-500 hover:bg-blue-50": variant === "plain",
    // Sizes
    "px-4 py-2 text-sm": size === "sm",
    "px-6 py-3 text-base": size === "md",
    "px-8 py-4 text-lg": size === "lg",
    // Disabled and loading state
    "opacity-50 cursor-not-allowed": disabled || loading,
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled || loading}>
      {loading && <span className="loader mr-2"></span>}
      {startDecorator && <span className="mr-2">{startDecorator}</span>}
      {children}
      {endDecorator && <span className="ml-2">{endDecorator}</span>}
    </button>
  );
};

export default Button;
