import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog } from "@usememos/mui";

const meta = {
  title: "Overlay/Dialog",
  tags: ["autodocs"],
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button />}>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Invite teammate</Dialog.Title>
          <Dialog.Description>
            Share access with a new collaborator.
          </Dialog.Description>
        </Dialog.Header>
      </Dialog.Content>
    </Dialog.Root>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
