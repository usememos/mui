import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import * as React from "react";

function Root(props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-scope="dialog" data-part="root" {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-scope="dialog" data-part="trigger" {...props} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-scope="dialog" data-part="portal" {...props} />;
}

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop>
>((props, ref) => {
  return <DialogPrimitive.Backdrop ref={ref} data-scope="dialog" data-part="overlay" {...props} />;
});

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>
>((props, ref) => {
  return <DialogPrimitive.Popup ref={ref} data-scope="dialog" data-part="content" {...props} />;
});

const Close = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>((props, ref) => {
  return <DialogPrimitive.Close ref={ref} data-scope="dialog" data-part="close" {...props} />;
});

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => {
  return <DialogPrimitive.Title ref={ref} data-scope="dialog" data-part="title" {...props} />;
});

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => {
  return <DialogPrimitive.Description ref={ref} data-scope="dialog" data-part="description" {...props} />;
});

export const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
  Description,
};
