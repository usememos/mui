import * as React from "react";

import { cx } from "../shared/cx";

export type ButtonVariant = "solid" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "md",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cx("mui-button", className)}
        data-size={size}
        data-variant={variant}
        data-disabled={disabled ? "" : undefined}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
