import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import * as React from "react";

function Root(props: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-scope="checkbox"
      data-part="root"
      {...props}
    />
  );
}

function Indicator(props: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>) {
  return (
    <CheckboxPrimitive.Indicator
      data-scope="checkbox"
      data-part="indicator"
      {...props}
    />
  );
}

export const Checkbox = {
  Root,
  Indicator,
};
