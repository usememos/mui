import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

type PositionerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>;
type ProviderProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>;
type RootProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>;
type PortalProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children"> & {
    className?: string;
  };

const Provider: React.FC<ProviderProps> = (props) => {
  return <TooltipPrimitive.Provider data-scope="tooltip" data-part="provider" {...props} />;
};

const Root: React.FC<RootProps> = (props) => {
  return <TooltipPrimitive.Root data-scope="tooltip" data-part="root" {...props} />;
};

const Trigger = React.forwardRef<
  HTMLButtonElement,
  TriggerProps
>((props, ref) => {
  return <TooltipPrimitive.Trigger ref={ref} data-scope="tooltip" data-part="trigger" {...props} />;
});

const Portal: React.FC<PortalProps> = (props) => {
  return <TooltipPrimitive.Portal data-scope="tooltip" data-part="portal" {...props} />;
};

const Content = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Popup>,
  ContentProps
>(
  (
    {
      className,
      children,
      align = "center",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <TooltipPrimitive.Positioner
        data-scope="tooltip"
        data-part="positioner"
        align={align}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
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
  },
);

Provider.displayName = "Tooltip.Provider";
Root.displayName = "Tooltip.Root";
Trigger.displayName = "Tooltip.Trigger";
Portal.displayName = "Tooltip.Portal";
Content.displayName = "Tooltip.Content";

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
};
