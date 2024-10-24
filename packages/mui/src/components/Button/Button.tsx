import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  type?: "default" | "primary" | "success" | "warning" | "error"; // default 是默认类型
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "default",
  size = "md",
  disabled = false,
  startDecorator,
  endDecorator,
  onClick,
}) => {
  const baseClasses = "inline-flex items-center font-medium rounded";

  const typeClasses = clsx({
    "bg-gray-200 text-black hover:bg-gray-300": type === "default",
    "bg-primary text-white hover:bg-primary-dark": type === "primary",
    "bg-success text-white hover:bg-success-dark": type === "success",
    "bg-warning text-white hover:bg-warning-dark": type === "warning",
    "bg-error text-white hover:bg-error-dark": type === "error",
    "opacity-50 cursor-not-allowed": disabled,
  });

  const sizeClasses = clsx({
    "px-2 py-1 text-xs": size === "sm",
    "px-4 py-2 text-sm": size === "md",
    "px-6 py-3 text-base": size === "lg",
  });

  return (
    <button className={clsx(baseClasses, typeClasses, sizeClasses)} onClick={onClick} disabled={disabled}>
      {startDecorator && <span className="mr-2">{startDecorator}</span>}
      {children}
      {endDecorator && <span className="ml-2">{endDecorator}</span>}
    </button>
  );
};

export default Button;
