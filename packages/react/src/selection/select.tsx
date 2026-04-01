import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { Select as PrimitiveSelect } from "../../../primitives/src/selection/select";
import { cx } from "../shared/cx";

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger> & {
  size?: "sm" | "md" | "lg";
};

const Root = PrimitiveSelect.Root;
const Group = PrimitiveSelect.Group;
const Value = PrimitiveSelect.Value;

function Trigger({
  className,
  children,
  size = "md",
  ...props
}: SelectTriggerProps) {
  return (
    <PrimitiveSelect.Trigger
      className={cx("mui-select__trigger", className)}
      data-size={size}
      {...props}
    >
      {children}
      <ChevronDownIcon className="mui-select__icon" size={16} aria-hidden="true" />
    </PrimitiveSelect.Trigger>
  );
}

function Content({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Content>) {
  return (
    <PrimitiveSelect.Portal>
      <PrimitiveSelect.Content
        className={cx("mui-select__content", className)}
        {...props}
      >
        <PrimitiveSelect.ScrollUpButton className="mui-select__scroll-button">
          <ChevronUpIcon size={16} />
        </PrimitiveSelect.ScrollUpButton>
        <PrimitiveSelect.Viewport className="mui-select__viewport">
          {children}
        </PrimitiveSelect.Viewport>
        <PrimitiveSelect.ScrollDownButton className="mui-select__scroll-button">
          <ChevronDownIcon size={16} />
        </PrimitiveSelect.ScrollDownButton>
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  );
}

function Label({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Label>) {
  return (
    <PrimitiveSelect.Label
      className={cx("mui-select__label", className)}
      {...props}
    />
  );
}

function Item({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Item>) {
  return (
    <PrimitiveSelect.Item
      className={cx("mui-select__item", className)}
      {...props}
    >
      <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
      <PrimitiveSelect.ItemIndicator className="mui-select__item-indicator">
        <CheckIcon size={14} />
      </PrimitiveSelect.ItemIndicator>
    </PrimitiveSelect.Item>
  );
}

function Separator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Separator>) {
  return (
    <PrimitiveSelect.Separator
      className={cx("mui-select__separator", className)}
      {...props}
    />
  );
}

export const Select = {
  Root,
  Group,
  Value,
  Trigger,
  Content,
  Label,
  Item,
  Separator,
};
