import { Menu as DropdownMenuPrimitive } from "@base-ui/react/menu";
import * as React from "react";

type PositionerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Positioner>;
type ContentProps = Omit<PositionerProps, "children" | "className"> & {
  children?: React.ReactNode;
  className?: string;
};

function Root(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-scope="dropdown-menu" data-part="root" {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-scope="dropdown-menu" data-part="trigger" {...props} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-scope="dropdown-menu" data-part="portal" {...props} />;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Positioner
      data-scope="dropdown-menu"
      data-part="positioner"
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
});

function Item(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) {
  return <DropdownMenuPrimitive.Item data-scope="dropdown-menu" data-part="item" {...props} />;
}

function CheckboxItem(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return <DropdownMenuPrimitive.CheckboxItem data-scope="dropdown-menu" data-part="checkbox-item" {...props} />;
}

function CheckboxItemIndicator(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItemIndicator>) {
  return (
    <DropdownMenuPrimitive.CheckboxItemIndicator
      data-scope="dropdown-menu"
      data-part="checkbox-item-indicator"
      {...props}
    />
  );
}

function RadioItem(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>) {
  return <DropdownMenuPrimitive.RadioItem data-scope="dropdown-menu" data-part="radio-item" {...props} />;
}

function RadioItemIndicator(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItemIndicator>) {
  return (
    <DropdownMenuPrimitive.RadioItemIndicator
      data-scope="dropdown-menu"
      data-part="radio-item-indicator"
      {...props}
    />
  );
}

function Label(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.GroupLabel>) {
  return <DropdownMenuPrimitive.GroupLabel data-scope="dropdown-menu" data-part="label" {...props} />;
}

function Separator(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator data-scope="dropdown-menu" data-part="separator" {...props} />;
}

function Group(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-scope="dropdown-menu" data-part="group" {...props} />;
}

function Sub(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubmenuRoot>) {
  return <DropdownMenuPrimitive.SubmenuRoot data-scope="dropdown-menu" data-part="sub" {...props} />;
}

function SubTrigger(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubmenuTrigger>) {
  return <DropdownMenuPrimitive.SubmenuTrigger data-scope="dropdown-menu" data-part="sub-trigger" {...props} />;
}

const SubContent = React.forwardRef<HTMLDivElement, ContentProps>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Positioner
      data-scope="dropdown-menu"
      data-part="sub-positioner"
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
});

function RadioGroup(props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-scope="dropdown-menu" data-part="radio-group" {...props} />;
}

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
