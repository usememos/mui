import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";

type PositionerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Popup>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children" | "finalFocus"> & {
    className?: string;
  };

function Root(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-scope="select" data-part="root" {...props} />;
}

function Group(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-scope="select" data-part="group" {...props} />;
}

function Value(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-scope="select" data-part="value" {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>) {
  return <SelectPrimitive.Trigger data-scope="select" data-part="trigger" {...props} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>) {
  return <SelectPrimitive.Portal data-scope="select" data-part="portal" {...props} />;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, finalFocus, ...props }, ref) => {
    return (
      <SelectPrimitive.Positioner
        data-scope="select"
        data-part="positioner"
        {...props}
      >
        <SelectPrimitive.Popup
          ref={ref}
          data-scope="select"
          data-part="content"
          className={className}
          finalFocus={finalFocus}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    );
  },
);

function Viewport(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.List>) {
  return <SelectPrimitive.List data-scope="select" data-part="viewport" {...props} />;
}

function Label(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.GroupLabel>) {
  return <SelectPrimitive.GroupLabel data-scope="select" data-part="label" {...props} />;
}

function Item(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>) {
  return <SelectPrimitive.Item data-scope="select" data-part="item" {...props} />;
}

function ItemText(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>) {
  return <SelectPrimitive.ItemText data-scope="select" data-part="item-text" {...props} />;
}

function ItemIndicator(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>) {
  return <SelectPrimitive.ItemIndicator data-scope="select" data-part="item-indicator" {...props} />;
}

function Separator(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator data-scope="select" data-part="separator" {...props} />;
}

function ScrollUpButton(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpArrow>) {
  return <SelectPrimitive.ScrollUpArrow data-scope="select" data-part="scroll-up-button" {...props} />;
}

function ScrollDownButton(props: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownArrow>) {
  return <SelectPrimitive.ScrollDownArrow data-scope="select" data-part="scroll-down-button" {...props} />;
}

export const Select = {
  Root,
  Group,
  Value,
  Trigger,
  Portal,
  Content,
  Viewport,
  Label,
  Item,
  ItemText,
  ItemIndicator,
  Separator,
  ScrollUpButton,
  ScrollDownButton,
};
