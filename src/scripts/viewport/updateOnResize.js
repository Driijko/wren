import { updateBreakpoint } from "../../dynamic/breakpoint";

export default function updateOnResize() {
  window.addEventListener("resize", updateBreakpoint);
};