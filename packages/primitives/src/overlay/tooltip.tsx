import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

type PositionerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children"> & {
    className?: string;
  };

function Provider(props: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-scope="tooltip" data-part="provider" {...props} />;
}

function Root(props: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-scope="tooltip" data-part="root" {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-scope="tooltip" data-part="trigger" {...props} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal>) {
  return <TooltipPrimitive.Portal data-scope="tooltip" data-part="portal" {...props} />;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(({ className, children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Positioner
      data-scope="tooltip"
      data-part="positioner"
      {...props}
    >
      <TooltipPrimitive.Popup
        ref={ref}
        data-scope="tooltip"
        data-part="content"
        className={className}
      >
        {children}
      </TooltipPrimitive.Popup>
    </TooltipPrimitive.Positioner>
  );
});

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
};
