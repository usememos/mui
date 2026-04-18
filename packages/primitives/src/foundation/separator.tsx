import * as React from "react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

type RootProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive>;

const Root = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive>,
  RootProps
>((props, ref) => {
  return (
    <SeparatorPrimitive
      ref={ref}
      data-scope="separator"
      data-part="root"
      {...props}
    />
  );
});

Root.displayName = "Separator.Root";

export const Separator = {
  Root,
};
