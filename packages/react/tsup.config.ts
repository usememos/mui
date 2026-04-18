import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/button.ts",
    checkbox: "src/checkbox.ts",
    input: "src/input.ts",
    dialog: "src/dialog.ts",
    "dropdown-menu": "src/dropdown-menu.ts",
    popover: "src/popover.ts",
    "radio-group": "src/radio-group.ts",
    select: "src/select.ts",
    separator: "src/separator.ts",
    switch: "src/switch.ts",
    tooltip: "src/tooltip.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
});
