import React from "react";
import RPopover from "@radix-ui/react-popover";

interface Props {
  trigger: React.ReactNode;
  content: React.ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
}

const Popover: React.FC<Props> = ({ trigger, content, ...props }) => (
  <RPopover.Root>
    <RPopover.Trigger className={props.triggerClassName}>{trigger}</RPopover.Trigger>
    <RPopover.Portal>
      <RPopover.Content className={props.contentClassName}>
        {content}
        <RPopover.Arrow />
      </RPopover.Content>
    </RPopover.Portal>
  </RPopover.Root>
);

export default Popover;
