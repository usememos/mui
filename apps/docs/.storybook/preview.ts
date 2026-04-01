import React from "react";
import type { Preview } from "@storybook/react";

import "../../../packages/theme/src/theme.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { "data-mui-theme": "light", style: { padding: "2rem", minWidth: "24rem" } },
        React.createElement(Story),
      ),
  ],
};

export default preview;
