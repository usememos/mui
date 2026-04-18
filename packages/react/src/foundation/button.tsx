import * as React from "react";

import type { ControlSize } from "../shared/control-size";
import { cx } from "../shared/cx";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";
export type ButtonSize = ControlSize | "icon";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
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
