import * as React from "react";

import { RadioGroupPrimitiveParts as PrimitiveRadioGroup } from "../../../primitives/src/foundation/radio-group";
import { cx } from "../shared/cx";

type RootProps = React.ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Root>;
type ItemProps = React.ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Item>;

function Root({ className, ...props }: RootProps) {
  return (
    <PrimitiveRadioGroup.Root
      className={cx("mui-radio-group", className)}
      {...props}
    />
  );
}

function Item({ className, children, ...props }: ItemProps) {
  return (
    <PrimitiveRadioGroup.Item
      className={cx("mui-radio-group__item", className)}
      {...props}
    >
      <PrimitiveRadioGroup.Indicator className="mui-radio-group__indicator" />
      {children}
    </PrimitiveRadioGroup.Item>
  );
}

export const RadioGroup = {
  Root,
  Item,
};
