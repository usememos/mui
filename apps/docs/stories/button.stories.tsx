import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@usememos/mui";

const meta = {
  title: "Foundation/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Save changes",
    variant: "solid",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
