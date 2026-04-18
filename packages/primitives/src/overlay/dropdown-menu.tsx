import { Menu as DropdownMenuPrimitive } from "@base-ui/react/menu";
import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>;
type PortalProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>;
type PositionerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Positioner>;
type ContentProps = Omit<PositionerProps, "children" | "className"> & {
  children?: React.ReactNode;
  className?: string;
};
type ItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>;
type CheckboxItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
type CheckboxItemIndicatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItemIndicator>;
type RadioItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
type RadioItemIndicatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItemIndicator>;
type LabelProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.GroupLabel>;
type SeparatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
type GroupProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>;
type SubProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubmenuRoot>;
type SubTriggerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubmenuTrigger>;
type RadioGroupProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>;

const Root: React.FC<RootProps> = (props) => {
  return <DropdownMenuPrimitive.Root data-scope="dropdown-menu" data-part="root" {...props} />;
};

const Trigger = React.forwardRef<
  HTMLButtonElement,
  TriggerProps
>((props, ref) => {
  return <DropdownMenuPrimitive.Trigger ref={ref} data-scope="dropdown-menu" data-part="trigger" {...props} />;
});

const Portal: React.FC<PortalProps> = (props) => {
  return <DropdownMenuPrimitive.Portal data-scope="dropdown-menu" data-part="portal" {...props} />;
};

const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Popup>,
  ContentProps
>(
  (
    {
      className,
      children,
      align = "start",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <DropdownMenuPrimitive.Positioner
        data-scope="dropdown-menu"
        data-part="positioner"
        align={align}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
        {...props}
      >
        <DropdownMenuPrimitive.Popup
          ref={ref}
          data-scope="dropdown-menu"
          data-part="content"
          className={className}
        >
          {children}
        </DropdownMenuPrimitive.Popup>
      </DropdownMenuPrimitive.Positioner>
    );
  },
);

const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  ItemProps
>((props, ref) => {
  return <DropdownMenuPrimitive.Item ref={ref} data-scope="dropdown-menu" data-part="item" {...props} />;
});

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  CheckboxItemProps
>((props, ref) => {
  return <DropdownMenuPrimitive.CheckboxItem ref={ref} data-scope="dropdown-menu" data-part="checkbox-item" {...props} />;
});

const CheckboxItemIndicator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItemIndicator>,
  CheckboxItemIndicatorProps
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.CheckboxItemIndicator
      ref={ref}
      data-scope="dropdown-menu"
      data-part="checkbox-item-indicator"
      {...props}
    />
  );
});

const RadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  RadioItemProps
>((props, ref) => {
  return <DropdownMenuPrimitive.RadioItem ref={ref} data-scope="dropdown-menu" data-part="radio-item" {...props} />;
});

const RadioItemIndicator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItemIndicator>,
  RadioItemIndicatorProps
>((props, ref) => {
  return (
    <DropdownMenuPrimitive.RadioItemIndicator
      ref={ref}
      data-scope="dropdown-menu"
      data-part="radio-item-indicator"
      {...props}
    />
  );
});

const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.GroupLabel>,
  LabelProps
>((props, ref) => {
  return <DropdownMenuPrimitive.GroupLabel ref={ref} data-scope="dropdown-menu" data-part="label" {...props} />;
});

const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  SeparatorProps
>((props, ref) => {
  return <DropdownMenuPrimitive.Separator ref={ref} data-scope="dropdown-menu" data-part="separator" {...props} />;
});

const Group: React.FC<GroupProps> = (props) => {
  return <DropdownMenuPrimitive.Group data-scope="dropdown-menu" data-part="group" {...props} />;
};

const Sub: React.FC<SubProps> = (props) => {
  return <DropdownMenuPrimitive.SubmenuRoot data-scope="dropdown-menu" data-part="sub" {...props} />;
};

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubmenuTrigger>,
  SubTriggerProps
>((props, ref) => {
  return <DropdownMenuPrimitive.SubmenuTrigger ref={ref} data-scope="dropdown-menu" data-part="sub-trigger" {...props} />;
});

const SubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Popup>,
  ContentProps
>(
  (
    {
      className,
      children,
      align = "start",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <DropdownMenuPrimitive.Positioner
        data-scope="dropdown-menu"
        data-part="sub-positioner"
        align={align}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
        {...props}
      >
        <DropdownMenuPrimitive.Popup
          ref={ref}
          data-scope="dropdown-menu"
          data-part="sub-content"
          className={className}
        >
          {children}
        </DropdownMenuPrimitive.Popup>
      </DropdownMenuPrimitive.Positioner>
    );
  },
);

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return <DropdownMenuPrimitive.RadioGroup data-scope="dropdown-menu" data-part="radio-group" {...props} />;
};

Root.displayName = "DropdownMenu.Root";
Trigger.displayName = "DropdownMenu.Trigger";
Portal.displayName = "DropdownMenu.Portal";
Content.displayName = "DropdownMenu.Content";
Item.displayName = "DropdownMenu.Item";
CheckboxItem.displayName = "DropdownMenu.CheckboxItem";
CheckboxItemIndicator.displayName = "DropdownMenu.CheckboxItemIndicator";
RadioItem.displayName = "DropdownMenu.RadioItem";
RadioItemIndicator.displayName = "DropdownMenu.RadioItemIndicator";
Label.displayName = "DropdownMenu.Label";
Separator.displayName = "DropdownMenu.Separator";
Group.displayName = "DropdownMenu.Group";
Sub.displayName = "DropdownMenu.Sub";
SubTrigger.displayName = "DropdownMenu.SubTrigger";
SubContent.displayName = "DropdownMenu.SubContent";
RadioGroup.displayName = "DropdownMenu.RadioGroup";

export const DropdownMenu = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  CheckboxItem,
  CheckboxItemIndicator,
  RadioItem,
  RadioItemIndicator,
  Label,
  Separator,
  Group,
  Sub,
  SubTrigger,
  SubContent,
  RadioGroup,
};
