import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
type IndicatorProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>;

const Root = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  RootProps
>((props, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-scope="checkbox"
      data-part="root"
      {...props}
    />
  );
});

const Indicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  IndicatorProps
>((props, ref) => {
  return (
    <CheckboxPrimitive.Indicator
      ref={ref}
      data-scope="checkbox"
      data-part="indicator"
      {...props}
    />
  );
});

Root.displayName = "Checkbox.Root";
Indicator.displayName = "Checkbox.Indicator";

export const Checkbox = {
  Root,
  Indicator,
};
