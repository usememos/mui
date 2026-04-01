import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";

import { DropdownMenu as PrimitiveDropdownMenu } from "../../../primitives/src/overlay/dropdown-menu";
import { cx } from "../shared/cx";

const Root = PrimitiveDropdownMenu.Root;
const Trigger = PrimitiveDropdownMenu.Trigger;
const Portal = PrimitiveDropdownMenu.Portal;
const Group = PrimitiveDropdownMenu.Group;
const Sub = PrimitiveDropdownMenu.Sub;
const RadioGroup = PrimitiveDropdownMenu.RadioGroup;

function Content({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Content>) {
  return (
    <PrimitiveDropdownMenu.Portal>
      <PrimitiveDropdownMenu.Content
        className={cx("mui-dropdown-menu__content", className)}
        sideOffset={sideOffset}
        {...props}
      />
    </PrimitiveDropdownMenu.Portal>
  );
}

function Item({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Item>) {
  return (
    <PrimitiveDropdownMenu.Item
      className={cx("mui-dropdown-menu__item", className)}
      {...props}
    />
  );
}

function CheckboxItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.CheckboxItem>) {
  return (
    <PrimitiveDropdownMenu.CheckboxItem
      className={cx("mui-dropdown-menu__item", className)}
      {...props}
    >
      <span className="mui-dropdown-menu__item-indicator">
        <PrimitiveDropdownMenu.CheckboxItemIndicator>
          <CheckIcon size={14} />
        </PrimitiveDropdownMenu.CheckboxItemIndicator>
      </span>
      {children}
    </PrimitiveDropdownMenu.CheckboxItem>
  );
}

function RadioItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.RadioItem>) {
  return (
    <PrimitiveDropdownMenu.RadioItem
      className={cx("mui-dropdown-menu__item", className)}
      {...props}
    >
      <span className="mui-dropdown-menu__item-indicator">
        <PrimitiveDropdownMenu.RadioItemIndicator>
          <CircleIcon size={10} fill="currentColor" />
        </PrimitiveDropdownMenu.RadioItemIndicator>
      </span>
      {children}
    </PrimitiveDropdownMenu.RadioItem>
  );
}

function Label({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Label>) {
  return (
    <PrimitiveDropdownMenu.Label
      className={cx("mui-dropdown-menu__label", className)}
      {...props}
    />
  );
}

function Separator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Separator>) {
  return (
    <PrimitiveDropdownMenu.Separator
      className={cx("mui-dropdown-menu__separator", className)}
      {...props}
    />
  );
}

function SubTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubTrigger>) {
  return (
    <PrimitiveDropdownMenu.SubTrigger
      className={cx("mui-dropdown-menu__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon size={14} />
    </PrimitiveDropdownMenu.SubTrigger>
  );
}

function SubContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubContent>) {
  return (
    <PrimitiveDropdownMenu.SubContent
      className={cx("mui-dropdown-menu__content", className)}
      {...props}
    />
  );
}

export const DropdownMenu = {
  Root,
  Trigger,
  Portal,
  Group,
  Sub,
  RadioGroup,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  SubTrigger,
  SubContent,
};
