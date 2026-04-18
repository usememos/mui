import * as React from "react";

import { Popover as PrimitivePopover } from "../../../primitives/src/overlay/popover";
import { cx } from "../shared/cx";

type PopoverRootProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean, eventDetails: unknown) => void;
  onOpenChangeComplete?: (open: boolean) => void;
  actionsRef?: React.RefObject<{ unmount: () => void; close: () => void } | null>;
  modal?: boolean | "trap-focus";
  triggerId?: string | null;
  defaultTriggerId?: string | null;
  handle?: unknown;
};

type PopoverTriggerProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  render?: React.ReactElement | ((props: React.HTMLAttributes<HTMLElement>, state: unknown) => React.ReactNode);
  nativeButton?: boolean;
  handle?: unknown;
  payload?: unknown;
  openOnHover?: boolean;
  delay?: number;
  closeDelay?: number;
};

type PopoverPortalProps = {
  children?: React.ReactNode;
  container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  keepMounted?: boolean;
};

type PopoverContentProps = Omit<React.HTMLAttributes<HTMLDivElement>, "style"> & {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  collisionPadding?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
  sticky?: boolean;
  initialFocus?: boolean | React.RefObject<HTMLElement | null> | ((openType: unknown) => void | boolean | HTMLElement | null);
  finalFocus?: boolean | React.RefObject<HTMLElement | null> | ((closeType: unknown) => void | boolean | HTMLElement | null);
  style?: React.CSSProperties;
};

function Root(props: PopoverRootProps) {
  return (
    <PrimitivePopover.Root
      {...(props as React.ComponentPropsWithoutRef<typeof PrimitivePopover.Root>)}
    />
  );
}

const Trigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, ref) => {
    return (
      <PrimitivePopover.Trigger
        ref={ref}
        {...(props as React.ComponentPropsWithoutRef<typeof PrimitivePopover.Trigger>)}
      />
    );
  },
);

function Portal(props: PopoverPortalProps) {
  return (
    <PrimitivePopover.Portal
      {...(props as React.ComponentPropsWithoutRef<typeof PrimitivePopover.Portal>)}
    />
  );
}

function Content({
  className,
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PrimitivePopover.Portal>
      <PrimitivePopover.Content
        className={cx("mui-popover__content", className)}
        sideOffset={sideOffset}
        {...(props as React.ComponentPropsWithoutRef<typeof PrimitivePopover.Content>)}
      />
    </PrimitivePopover.Portal>
  );
}

Trigger.displayName = "Popover.Trigger";

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
};
