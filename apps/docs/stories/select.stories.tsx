import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@usememos/mui";

const meta = {
  title: "Selection/Select",
  tags: ["autodocs"],
  render: () => (
    <div style={{ width: 280 }}>
      <Select.Root defaultValue="react">
        <Select.Trigger aria-label="Framework">
          <Select.Value placeholder="Choose a framework" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="react">React</Select.Item>
          <Select.Item value="vue">Vue</Select.Item>
          <Select.Item value="svelte">Svelte</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
