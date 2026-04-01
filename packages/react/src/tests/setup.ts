import "@testing-library/jest-dom/vitest";
import * as axeMatchers from "vitest-axe/matchers";

expect.extend(axeMatchers);

if (!window.PointerEvent) {
  class PointerEventShim extends MouseEvent {}
  window.PointerEvent = PointerEventShim as typeof PointerEvent;
}
