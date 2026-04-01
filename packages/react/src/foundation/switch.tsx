import * as React from "react";

import { Switch as PrimitiveSwitch } from "../../../primitives/src/foundation/switch";
import { cx } from "../shared/cx";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof PrimitiveSwitch.Root>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <PrimitiveSwitch.Root
      className={cx("mui-switch", className)}
      {...props}
    >
      <PrimitiveSwitch.Thumb className="mui-switch__thumb" />
    </PrimitiveSwitch.Root>
  );
}
