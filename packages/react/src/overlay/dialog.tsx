import { XIcon } from "lucide-react";
import * as React from "react";

import { Dialog as PrimitiveDialog } from "../../../primitives/src/overlay/dialog";
import { cx } from "../shared/cx";

type ContentProps = React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Content> & {
  showCloseButton?: boolean;
  slotProps?: {
    close?: React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Close>;
  };
};

const Root = PrimitiveDialog.Root;
const Trigger = PrimitiveDialog.Trigger;
const Portal = PrimitiveDialog.Portal;

const Overlay = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <PrimitiveDialog.Overlay
      ref={ref}
      className={cx("mui-dialog__overlay", className)}
      {...props}
    />
  );
});

const Close = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Close>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Close>
>(({ className, children, ...props }, ref) => {
  return (
    <PrimitiveDialog.Close
      ref={ref}
      className={cx("mui-dialog__close", className)}
      {...props}
    >
      {children ?? <XIcon size={16} aria-hidden="true" />}
      <span className="sr-only">Close</span>
    </PrimitiveDialog.Close>
  );
});

const Content = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Content>,
  ContentProps
>(({ className, children, showCloseButton = true, slotProps, ...props }, ref) => {
  const closeProps = {
    "aria-label": "Close dialog",
    ...slotProps?.close,
  };

  return (
    <Portal>
      <Overlay />
      <PrimitiveDialog.Content
        ref={ref}
        className={cx("mui-dialog__content", className)}
        {...props}
      >
        {children}
        {showCloseButton ? <Close {...closeProps} /> : null}
      </PrimitiveDialog.Content>
    </Portal>
  );
});

const Header = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("mui-dialog__header", className)} {...props} />
  ),
);

const Footer = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("mui-dialog__footer", className)} {...props} />
  ),
);

const Title = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Title>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <PrimitiveDialog.Title
      ref={ref}
      className={cx("mui-dialog__title", className)}
      {...props}
    />
  );
});

const Description = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Description>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Description>
>(({ className, ...props }, ref) => {
  return (
    <PrimitiveDialog.Description
      ref={ref}
      className={cx("mui-dialog__description", className)}
      {...props}
    />
  );
});

Header.displayName = "Dialog.Header";
Footer.displayName = "Dialog.Footer";

export const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Header,
  Footer,
  Title,
  Description,
};
