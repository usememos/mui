import * as React from "react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

function Root(props: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-scope="separator"
      data-part="root"
      {...props}
    />
  );
}

export const Separator = {
  Root,
};
