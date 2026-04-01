/// <reference types="@vitest/browser/providers/playwright" />
/// <reference types="@vitest/browser/matchers" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react/jsx-dev-runtime"],
  },
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./packages/react/src/tests/setup.ts"],
          include: ["packages/react/src/tests/**/*.test.tsx"],
          exclude: ["packages/react/src/tests/**/*.browser.test.tsx"],
        },
      },
      {
        test: {
          name: "browser",
          globals: true,
          include: ["packages/react/src/tests/**/*.browser.test.tsx"],
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
