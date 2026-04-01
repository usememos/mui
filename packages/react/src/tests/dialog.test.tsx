import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

import { Button } from "../foundation/button";
import { Dialog } from "../overlay/dialog";

describe("Dialog", () => {
  it("opens and closes through the compound API", async () => {
    const user = userEvent.setup();

    render(
      <Dialog.Root>
        <Dialog.Trigger render={<Button />}>Open modal</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Access</Dialog.Title>
            <Dialog.Description>Inspect the current role.</Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>,
    );

    await user.click(screen.getByRole("button", { name: "Open modal" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Close dialog"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("has no obvious accessibility violations when open", async () => {
    const { container } = render(
      <Dialog.Root open>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Project</Dialog.Title>
            <Dialog.Description>Members and permissions.</Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>,
    );

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
