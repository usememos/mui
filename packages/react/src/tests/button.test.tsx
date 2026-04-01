import { render, screen } from "@testing-library/react";

import { Button } from "../foundation/button";

describe("Button", () => {
  it("applies the stable variant and size attributes", () => {
    render(
      <Button size="lg" variant="outline">
        Save
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("mui-button");
    expect(button).toHaveAttribute("data-size", "lg");
    expect(button).toHaveAttribute("data-variant", "outline");
  });
});
