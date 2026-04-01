import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

function Root(props: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-scope="switch"
      data-part="root"
      {...props}
    />
  );
}

function Thumb(props: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>) {
  return (
    <SwitchPrimitive.Thumb
      data-scope="switch"
      data-part="thumb"
      {...props}
    />
  );
}

export const Switch = {
  Root,
  Thumb,
};
