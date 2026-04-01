import { page, userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";

import { Button } from "../foundation/button";
import { Dialog } from "../overlay/dialog";

describe("Dialog browser", () => {
  it("restores focus to the trigger after closing with Escape", async () => {
    await render(
      <Dialog.Root>
        <Dialog.Trigger render={<Button />}>Open modal</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Project access</Dialog.Title>
            <Dialog.Description>Review the current members.</Dialog.Description>
          </Dialog.Header>
          <Button>Confirm</Button>
        </Dialog.Content>
      </Dialog.Root>,
    );

    const trigger = page.getByRole("button", { name: "Open modal" });

    await trigger.click();
    await expect.element(page.getByRole("dialog")).toBeVisible();

    await userEvent.keyboard("{Escape}");

    await expect.element(page.getByRole("dialog")).not.toBeInTheDocument();
    await expect.element(trigger).toHaveFocus();
  });
});
