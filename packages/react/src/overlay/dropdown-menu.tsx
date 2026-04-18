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

function ItemText({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return <span className={cx("mui-dropdown-menu__item-text", className)} {...props} />;
}

function Shortcut({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return <span className={cx("mui-dropdown-menu__shortcut", className)} {...props} />;
}

function Content({
  className,
  sideOffset = 4,
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
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Item>) {
  return (
    <PrimitiveDropdownMenu.Item
      className={cx("mui-dropdown-menu__item", className)}
      {...props}
    >
      <span className="mui-dropdown-menu__item-leading" aria-hidden="true" />
      <ItemText>{children}</ItemText>
    </PrimitiveDropdownMenu.Item>
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
      <span className="mui-dropdown-menu__item-leading" aria-hidden="true">
        <PrimitiveDropdownMenu.CheckboxItemIndicator>
          <CheckIcon className="mui-dropdown-menu__item-indicator" size={10} />
        </PrimitiveDropdownMenu.CheckboxItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
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
      <span className="mui-dropdown-menu__item-leading" aria-hidden="true">
        <PrimitiveDropdownMenu.RadioItemIndicator>
          <CircleIcon className="mui-dropdown-menu__item-indicator" size={6} fill="currentColor" />
        </PrimitiveDropdownMenu.RadioItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
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
      <span className="mui-dropdown-menu__item-leading" aria-hidden="true" />
      <ItemText>{children}</ItemText>
      <span className="mui-dropdown-menu__item-trailing" aria-hidden="true">
        <ChevronRightIcon size={12} />
      </span>
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
  ItemText,
  Shortcut,
  SubTrigger,
  SubContent,
};
