import * as React from "react";

import { Popover as PrimitivePopover } from "../../../primitives/src/overlay/popover";
import { cx } from "../shared/cx";

const Root = PrimitivePopover.Root;
const Trigger = PrimitivePopover.Trigger;
const Portal = PrimitivePopover.Portal;

function Content({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitivePopover.Content>) {
  return (
    <PrimitivePopover.Portal>
      <PrimitivePopover.Content
        className={cx("mui-popover__content", className)}
        sideOffset={sideOffset}
        {...props}
      />
    </PrimitivePopover.Portal>
  );
}

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
};
