import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as React from "react";

type PositionerProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children" | "finalFocus" | "initialFocus"> & {
    className?: string;
  };

function Root(props: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-scope="popover" data-part="root" {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-scope="popover" data-part="trigger" {...props} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>) {
  return <PopoverPrimitive.Portal data-scope="popover" data-part="portal" {...props} />;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, finalFocus, initialFocus, ...props }, ref) => {
    return (
      <PopoverPrimitive.Positioner
        data-scope="popover"
        data-part="positioner"
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

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
};
