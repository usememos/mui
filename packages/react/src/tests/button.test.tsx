import { render, screen } from "@testing-library/react";

import { Button } from "../foundation/button";

describe("Button", () => {
  it("applies the default variant and stable size attribute", () => {
    render(<Button size="lg">Save</Button>);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("mui-button");
    expect(button).toHaveAttribute("data-size", "lg");
    expect(button).toHaveAttribute("data-variant", "default");
  });

  it("supports secondary and link variants", () => {
    render(
      <>
        <Button variant="secondary">Archive</Button>
        <Button variant="link">Learn more</Button>
      </>,
    );

    expect(screen.getByRole("button", { name: "Archive" })).toHaveAttribute(
      "data-variant",
      "secondary",
    );
    expect(screen.getByRole("button", { name: "Learn more" })).toHaveAttribute(
      "data-variant",
      "link",
    );
  });
});
