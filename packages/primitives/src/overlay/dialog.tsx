import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;
type TriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;
type PortalProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
type OverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop>;
type ContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>;
type CloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;
type TitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
type DescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

const Root: React.FC<RootProps> = (props) => {
  return <DialogPrimitive.Root data-scope="dialog" data-part="root" {...props} />;
};

const Trigger = React.forwardRef<
  HTMLButtonElement,
  TriggerProps
>((props, ref) => {
  return <DialogPrimitive.Trigger ref={ref} data-scope="dialog" data-part="trigger" {...props} />;
});

const Portal: React.FC<PortalProps> = (props) => {
  return <DialogPrimitive.Portal data-scope="dialog" data-part="portal" {...props} />;
};

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  OverlayProps
>((props, ref) => {
  return <DialogPrimitive.Backdrop ref={ref} data-scope="dialog" data-part="overlay" {...props} />;
});

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Popup>,
  ContentProps
>((props, ref) => {
  return <DialogPrimitive.Popup ref={ref} data-scope="dialog" data-part="content" {...props} />;
});

const Close = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  CloseProps
>((props, ref) => {
  return <DialogPrimitive.Close ref={ref} data-scope="dialog" data-part="close" {...props} />;
});

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  TitleProps
>((props, ref) => {
  return <DialogPrimitive.Title ref={ref} data-scope="dialog" data-part="title" {...props} />;
});

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DescriptionProps
>((props, ref) => {
  return <DialogPrimitive.Description ref={ref} data-scope="dialog" data-part="description" {...props} />;
});

Root.displayName = "Dialog.Root";
Trigger.displayName = "Dialog.Trigger";
Portal.displayName = "Dialog.Portal";
Overlay.displayName = "Dialog.Overlay";
Content.displayName = "Dialog.Content";
Close.displayName = "Dialog.Close";
Title.displayName = "Dialog.Title";
Description.displayName = "Dialog.Description";

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
