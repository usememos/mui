import { page } from "vitest/browser";
import { render } from "vitest-browser-react";

import "../../../theme/src/theme.css";
import { Dialog } from "../overlay/dialog";
import { Select } from "../selection/select";

describe("Overlay layering browser", () => {
  it("renders select content above height-limited stacking contexts", async () => {
    await render(
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: 360,
          height: 240,
          padding: 16,
          display: "flex",
          alignItems: "flex-end",
          background: "var(--mui-color-card)",
          border: "1px solid var(--mui-color-border)",
        }}
      >
        <Select.Root defaultValue="alpha">
          <Select.Trigger aria-label="Layered select">
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="alpha">Alpha</Select.Item>
            <Select.Item value="beta">Beta</Select.Item>
            <Select.Item value="gamma">Gamma</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>,
    );

    await page.getByLabelText("Layered select").click();
    await expect.element(page.getByRole("listbox")).toBeVisible();

    const content = document.querySelector(".mui-select__content") as HTMLElement | null;
    expect(content).toBeInstanceOf(HTMLElement);
    if (!content) {
      throw new Error("Select content was not rendered");
    }

    const rect = content.getBoundingClientRect();
    const topElement = document.elementFromPoint(
      Math.round(rect.left + rect.width / 2),
      Math.round(rect.top + 8),
    );

    expect(topElement?.closest(".mui-select__content")).toBe(content);
  });

  it("renders dialog overlay above sticky app chrome", async () => {
    await render(
      <>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            height: 56,
            background: "var(--mui-color-background)",
          }}
        >
          Sticky header
        </header>
        <Dialog.Root open>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Layered dialog</Dialog.Title>
              <Dialog.Description>Dialog should cover app chrome.</Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Root>
      </>,
    );

    await expect.element(page.getByRole("dialog")).toBeVisible();

    const topElement = document.elementFromPoint(12, 12);

    expect(topElement?.closest(".mui-dialog__overlay")).toBeInstanceOf(HTMLElement);
  });

  it("renders select content above dialog content when nested", async () => {
    await render(
      <Dialog.Root open>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Nested select</Dialog.Title>
            <Dialog.Description>Floating content should stay above the dialog.</Dialog.Description>
          </Dialog.Header>
          <Select.Root defaultValue="alpha">
            <Select.Trigger aria-label="Nested select">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="alpha">Alpha</Select.Item>
              <Select.Item value="beta">Beta</Select.Item>
              <Select.Item value="gamma">Gamma</Select.Item>
            </Select.Content>
          </Select.Root>
        </Dialog.Content>
      </Dialog.Root>,
    );

    await page.getByRole("combobox", { name: "Nested select" }).click();
    await expect.element(page.getByRole("listbox")).toBeVisible();

    const content = document.querySelector(".mui-select__content") as HTMLElement | null;
    expect(content).toBeInstanceOf(HTMLElement);
    if (!content) {
      throw new Error("Nested select content was not rendered");
    }

    const rect = content.getBoundingClientRect();
    const topElement = document.elementFromPoint(
      Math.round(rect.left + rect.width / 2),
      Math.round(rect.top + 8),
    );

    expect(topElement?.closest(".mui-select__content")).toBe(content);
  });

  it("keeps outside select content below an open dialog", async () => {
    await render(
      <>
        <div
          style={{
            position: "fixed",
            top: 240,
            left: "50%",
            width: 260,
            transform: "translateX(-50%)",
          }}
        >
          <Select.Root defaultValue="alpha" modal={false} open>
            <Select.Trigger aria-label="Outside select">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="alpha">Alpha</Select.Item>
              <Select.Item value="beta">Beta</Select.Item>
              <Select.Item value="gamma">Gamma</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <Dialog.Root open>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Modal over select</Dialog.Title>
              <Dialog.Description>Outside floating content should not cover this modal.</Dialog.Description>
            </Dialog.Header>
          </Dialog.Content>
        </Dialog.Root>
      </>,
    );

    await expect.element(page.getByRole("dialog")).toBeVisible();

    const content = document.querySelector(".mui-select__content") as HTMLElement | null;
    const dialog = document.querySelector(".mui-dialog__content") as HTMLElement | null;
    expect(content).toBeInstanceOf(HTMLElement);
    expect(dialog).toBeInstanceOf(HTMLElement);
    if (!content || !dialog) {
      throw new Error("Expected both select content and dialog content to render");
    }

    const rect = dialog.getBoundingClientRect();
    const topElement = document.elementFromPoint(
      Math.round(rect.left + rect.width / 2),
      Math.round(rect.top + rect.height / 2),
    );

    expect(topElement?.closest(".mui-dialog__content")).toBe(dialog);
  });
});
