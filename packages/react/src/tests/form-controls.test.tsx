import { render, screen } from "@testing-library/react";

import { Checkbox } from "../foundation/checkbox";
import { Input } from "../foundation/input";
import { RadioGroup } from "../foundation/radio-group";
import { Switch } from "../foundation/switch";
import { Select } from "../selection/select";

describe("Form control sizing", () => {
  it("applies size attributes across form controls", () => {
    render(
      <>
        <Checkbox aria-label="Checkbox" size="xs" />
        <Input aria-label="Input" size="lg" />
        <Switch aria-label="Switch" size="lg" />
        <RadioGroup.Root defaultValue="stable">
          <RadioGroup.Item aria-label="Radio" size="sm" value="stable" />
        </RadioGroup.Root>
        <Select.Root defaultValue="comfortable">
          <Select.Trigger aria-label="Density" size="lg">
            <Select.Value />
          </Select.Trigger>
        </Select.Root>
      </>,
    );

    expect(screen.getByRole("checkbox", { name: "Checkbox" })).toHaveAttribute(
      "data-size",
      "xs",
    );
    expect(screen.getByRole("textbox", { name: "Input" })).toHaveAttribute(
      "data-size",
      "lg",
    );
    expect(screen.getByRole("switch", { name: "Switch" })).toHaveAttribute(
      "data-size",
      "lg",
    );
    expect(screen.getByRole("radio", { name: "Radio" })).toHaveAttribute(
      "data-size",
      "sm",
    );
    expect(screen.getByRole("combobox", { name: "Density" })).toHaveAttribute(
      "data-size",
      "lg",
    );
  });

  it("uses md sizing by default for form controls", () => {
    render(
      <>
        <Checkbox aria-label="Checkbox" />
        <Input aria-label="Input" />
        <Switch aria-label="Switch" />
        <RadioGroup.Root defaultValue="stable">
          <RadioGroup.Item aria-label="Radio" value="stable" />
        </RadioGroup.Root>
      </>,
    );

    expect(screen.getByRole("checkbox", { name: "Checkbox" })).toHaveAttribute(
      "data-size",
      "md",
    );
    expect(screen.getByRole("textbox", { name: "Input" })).toHaveAttribute(
      "data-size",
      "md",
    );
    expect(screen.getByRole("switch", { name: "Switch" })).toHaveAttribute(
      "data-size",
      "md",
    );
    expect(screen.getByRole("radio", { name: "Radio" })).toHaveAttribute(
      "data-size",
      "md",
    );
  });

  it("marks disabled input consistently with native and data state", () => {
    render(<Input aria-label="Input" disabled />);

    const input = screen.getByRole("textbox", { name: "Input" });
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("data-disabled");
  });
});
