import { CheckIcon } from "lucide-react";
import * as React from "react";

import { Checkbox as PrimitiveCheckbox } from "../../../primitives/src/foundation/checkbox";
import { cx } from "../shared/cx";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof PrimitiveCheckbox.Root>;

export function Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <PrimitiveCheckbox.Root
      className={cx("mui-checkbox", className)}
      {...props}
    >
      <PrimitiveCheckbox.Indicator className="mui-checkbox__indicator">
        <CheckIcon size={10} strokeWidth={3} />
      </PrimitiveCheckbox.Indicator>
      {children}
    </PrimitiveCheckbox.Root>
  );
}
