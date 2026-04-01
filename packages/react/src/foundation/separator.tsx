import * as React from "react";

import { Separator as PrimitiveSeparator } from "../../../primitives/src/foundation/separator";
import { cx } from "../shared/cx";

export type SeparatorProps = React.ComponentPropsWithoutRef<typeof PrimitiveSeparator.Root>;

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <PrimitiveSeparator.Root
      className={cx("mui-separator", className)}
      orientation={orientation}
      {...props}
    />
  );
}
