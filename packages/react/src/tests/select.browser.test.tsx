import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import { Select } from "../selection/select";

describe("Select browser", () => {
  it("updates the trigger value after choosing an option", async () => {
    await render(
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
      </div>,
    );

    const trigger = page.getByLabelText("Framework");

    await trigger.click();
    await expect.element(page.getByRole("listbox")).toBeVisible();

    await page.getByRole("option", { name: "Vue" }).click();

    await expect.element(page.getByRole("listbox")).not.toBeInTheDocument();
    await expect.element(trigger).toHaveTextContent("vue");
  });
});
