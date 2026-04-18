import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";

type PositionerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Positioner>;
type PopupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Popup>;
type RootProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
type GroupProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
type ValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
type PortalProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>;
type ContentProps = Omit<PositionerProps, "children" | "className"> &
  Pick<PopupProps, "children" | "finalFocus"> & {
    className?: string;
  };
type ViewportProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.List>;
type LabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.GroupLabel>;
type ItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
type ItemTextProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>;
type ItemIndicatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>;
type SeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
type ScrollUpButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpArrow>;
type ScrollDownButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownArrow>;

const Root: React.FC<RootProps> = (props) => {
  return <SelectPrimitive.Root data-scope="select" data-part="root" {...props} />;
};

const Group: React.FC<GroupProps> = (props) => {
  return <SelectPrimitive.Group data-scope="select" data-part="group" {...props} />;
};

const Value = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  ValueProps
>((props, ref) => {
  return <SelectPrimitive.Value ref={ref} data-scope="select" data-part="value" {...props} />;
});

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  TriggerProps
>((props, ref) => {
  return <SelectPrimitive.Trigger ref={ref} data-scope="select" data-part="trigger" {...props} />;
});

const Portal: React.FC<PortalProps> = (props) => {
  return <SelectPrimitive.Portal data-scope="select" data-part="portal" {...props} />;
};

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Popup>,
  ContentProps
>(
  (
    {
      className,
      children,
      finalFocus,
      align = "start",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <SelectPrimitive.Positioner
        data-scope="select"
        data-part="positioner"
        align={align}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
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

const Viewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.List>,
  ViewportProps
>((props, ref) => {
  return <SelectPrimitive.List ref={ref} data-scope="select" data-part="viewport" {...props} />;
});

const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.GroupLabel>,
  LabelProps
>((props, ref) => {
  return <SelectPrimitive.GroupLabel ref={ref} data-scope="select" data-part="label" {...props} />;
});

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  ItemProps
>((props, ref) => {
  return <SelectPrimitive.Item ref={ref} data-scope="select" data-part="item" {...props} />;
});

const ItemText = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemText>,
  ItemTextProps
>((props, ref) => {
  return <SelectPrimitive.ItemText ref={ref} data-scope="select" data-part="item-text" {...props} />;
});

const ItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  ItemIndicatorProps
>((props, ref) => {
  return <SelectPrimitive.ItemIndicator ref={ref} data-scope="select" data-part="item-indicator" {...props} />;
});

const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SeparatorProps
>((props, ref) => {
  return <SelectPrimitive.Separator ref={ref} data-scope="select" data-part="separator" {...props} />;
});

const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpArrow>,
  ScrollUpButtonProps
>((props, ref) => {
  return <SelectPrimitive.ScrollUpArrow ref={ref} data-scope="select" data-part="scroll-up-button" {...props} />;
});

const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownArrow>,
  ScrollDownButtonProps
>((props, ref) => {
  return <SelectPrimitive.ScrollDownArrow ref={ref} data-scope="select" data-part="scroll-down-button" {...props} />;
});

Root.displayName = "Select.Root";
Group.displayName = "Select.Group";
Value.displayName = "Select.Value";
Trigger.displayName = "Select.Trigger";
Portal.displayName = "Select.Portal";
Content.displayName = "Select.Content";
Viewport.displayName = "Select.Viewport";
Label.displayName = "Select.Label";
Item.displayName = "Select.Item";
ItemText.displayName = "Select.ItemText";
ItemIndicator.displayName = "Select.ItemIndicator";
Separator.displayName = "Select.Separator";
ScrollUpButton.displayName = "Select.ScrollUpButton";
ScrollDownButton.displayName = "Select.ScrollDownButton";

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
