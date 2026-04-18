import { Radio } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>;
type ItemProps = React.ComponentPropsWithoutRef<typeof Radio.Root>;
type IndicatorProps = React.ComponentPropsWithoutRef<typeof Radio.Indicator>;

const Root = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive>,
  RootProps
>((props, ref) => {
  return (
    <RadioGroupPrimitive
      ref={ref}
      data-scope="radio-group"
      data-part="root"
      {...props}
    />
  );
});

const Item = React.forwardRef<
  React.ElementRef<typeof Radio.Root>,
  ItemProps
>((props, ref) => {
  return (
    <Radio.Root
      ref={ref}
      data-scope="radio-group"
      data-part="item"
      {...props}
    />
  );
});

const Indicator = React.forwardRef<
  React.ElementRef<typeof Radio.Indicator>,
  IndicatorProps
>((props, ref) => {
  return (
    <Radio.Indicator
      ref={ref}
      data-scope="radio-group"
      data-part="indicator"
      {...props}
    />
  );
});

Root.displayName = "RadioGroup.Root";
Item.displayName = "RadioGroup.Item";
Indicator.displayName = "RadioGroup.Indicator";

export const RadioGroupPrimitiveParts = {
  Root,
  Item,
  Indicator,
};
