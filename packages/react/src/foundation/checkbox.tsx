import { CheckIcon } from "lucide-react";
import * as React from "react";

import { Checkbox as PrimitiveCheckbox } from "../../../primitives/src/foundation/checkbox";
import type { ControlSize } from "../shared/control-size";
import { cx } from "../shared/cx";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof PrimitiveCheckbox.Root> & {
  size?: ControlSize;
};

export function Checkbox({ className, children, size = "md", ...props }: CheckboxProps) {
  return (
    <PrimitiveCheckbox.Root
      className={cx("mui-checkbox", className)}
      data-size={size}
      {...props}
    >
      <PrimitiveCheckbox.Indicator className="mui-checkbox__indicator">
        <CheckIcon size={10} strokeWidth={3} />
      </PrimitiveCheckbox.Indicator>
      {children}
    </PrimitiveCheckbox.Root>
  );
}
