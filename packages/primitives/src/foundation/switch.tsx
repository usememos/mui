import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

type RootProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;
type ThumbProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>;

const Root = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  RootProps
>((props, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-scope="switch"
      data-part="root"
      {...props}
    />
  );
});

const Thumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  ThumbProps
>((props, ref) => {
  return (
    <SwitchPrimitive.Thumb
      ref={ref}
      data-scope="switch"
      data-part="thumb"
      {...props}
    />
  );
});

Root.displayName = "Switch.Root";
Thumb.displayName = "Switch.Thumb";

export const Switch = {
  Root,
  Thumb,
};
