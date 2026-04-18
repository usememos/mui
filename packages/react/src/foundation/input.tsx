import * as React from "react";

import type { ControlSize } from "../shared/control-size";
import { cx } from "../shared/cx";

export type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "size"
> & {
  size?: ControlSize;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, size = "md", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx("mui-input", className)}
        data-disabled={disabled ? "" : undefined}
        data-size={size}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
