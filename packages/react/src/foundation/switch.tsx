import * as React from "react";

import { Switch as PrimitiveSwitch } from "../../../primitives/src/foundation/switch";
import type { ControlSize } from "../shared/control-size";
import { cx } from "../shared/cx";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof PrimitiveSwitch.Root> & {
  size?: ControlSize;
};

export function Switch({ className, size = "md", ...props }: SwitchProps) {
  return (
    <PrimitiveSwitch.Root
      className={cx("mui-switch", className)}
      data-size={size}
      {...props}
    >
      <PrimitiveSwitch.Thumb className="mui-switch__thumb" />
    </PrimitiveSwitch.Root>
  );
}
