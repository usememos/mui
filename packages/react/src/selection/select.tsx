import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { Select as PrimitiveSelect } from "../../../primitives/src/selection/select";
import type { ControlSize } from "../shared/control-size";
import { useOverlayLayerProps } from "../overlay/layer-context";
import { cx } from "../shared/cx";

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger> & {
  size?: ControlSize;
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
      <span className="mui-select__value-slot">{children}</span>
      <span className="mui-select__icon-slot" aria-hidden="true">
        <ChevronDownIcon className="mui-select__icon" size={12} />
      </span>
    </PrimitiveSelect.Trigger>
  );
}

function Content({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Content>) {
  const layerProps = useOverlayLayerProps(props);

  return (
    <PrimitiveSelect.Portal>
      <PrimitiveSelect.Content
        className={cx("mui-select__content", className)}
        {...layerProps}
      >
        <PrimitiveSelect.ScrollUpButton className="mui-select__scroll-button">
          <ChevronUpIcon size={12} />
        </PrimitiveSelect.ScrollUpButton>
        <PrimitiveSelect.Viewport className="mui-select__viewport">
          {children}
        </PrimitiveSelect.Viewport>
        <PrimitiveSelect.ScrollDownButton className="mui-select__scroll-button">
          <ChevronDownIcon size={12} />
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
      <span className="mui-select__item-leading" aria-hidden="true">
        <PrimitiveSelect.ItemIndicator className="mui-select__item-indicator">
          <CheckIcon size={10} />
        </PrimitiveSelect.ItemIndicator>
      </span>
      <PrimitiveSelect.ItemText className="mui-select__item-text">
        {children}
      </PrimitiveSelect.ItemText>
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
