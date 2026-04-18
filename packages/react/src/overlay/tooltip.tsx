import * as React from "react";

import { Tooltip as PrimitiveTooltip } from "../../../primitives/src/overlay/tooltip";
import { useOverlayLayerProps } from "./layer-context";
import { cx } from "../shared/cx";

const Provider = PrimitiveTooltip.Provider;
const Root = PrimitiveTooltip.Root;
const Trigger = PrimitiveTooltip.Trigger;

function Content({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveTooltip.Content>) {
  const layerProps = useOverlayLayerProps(props);

  return (
    <PrimitiveTooltip.Portal>
      <PrimitiveTooltip.Content
        className={cx("mui-tooltip__content", className)}
        sideOffset={sideOffset}
        {...layerProps}
      />
    </PrimitiveTooltip.Portal>
  );
}

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Content,
};
