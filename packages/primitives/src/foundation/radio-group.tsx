import { Radio } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as React from "react";

function Root(props: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-scope="radio-group"
      data-part="root"
      {...props}
    />
  );
}

function Item(props: React.ComponentPropsWithoutRef<typeof Radio.Root>) {
  return (
    <Radio.Root
      data-scope="radio-group"
      data-part="item"
      {...props}
    />
  );
}

function Indicator(props: React.ComponentPropsWithoutRef<typeof Radio.Indicator>) {
  return (
    <Radio.Indicator
      data-scope="radio-group"
      data-part="indicator"
      {...props}
    />
  );
}

export const RadioGroupPrimitiveParts = {
  Root,
  Item,
  Indicator,
};
