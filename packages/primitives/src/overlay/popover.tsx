import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as React from "react";

type PositionerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup>;
type RootProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>;
type PortalProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children" | "finalFocus" | "initialFocus"> & {
    className?: string;
  };

const Root: React.FC<RootProps> = (props) => {
  return <PopoverPrimitive.Root data-scope="popover" data-part="root" {...props} />;
};

const Trigger = React.forwardRef<
  HTMLButtonElement,
  TriggerProps
>((props, ref) => {
  return <PopoverPrimitive.Trigger ref={ref} data-scope="popover" data-part="trigger" {...props} />;
});

const Portal: React.FC<PortalProps> = (props) => {
  return <PopoverPrimitive.Portal data-scope="popover" data-part="portal" {...props} />;
};

const Content = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Popup>,
  ContentProps
>(
  (
    {
      className,
      children,
      finalFocus,
      initialFocus,
      align = "start",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <PopoverPrimitive.Positioner
        data-scope="popover"
        data-part="positioner"
        align={align}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
        {...props}
      >
        <PopoverPrimitive.Popup
          ref={ref}
          data-scope="popover"
          data-part="content"
          className={className}
          finalFocus={finalFocus}
          initialFocus={initialFocus}
        >
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    );
  },
);

Root.displayName = "Popover.Root";
Trigger.displayName = "Popover.Trigger";
Portal.displayName = "Popover.Portal";
Content.displayName = "Popover.Content";

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
};
