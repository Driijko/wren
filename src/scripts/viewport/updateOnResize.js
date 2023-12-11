import { updateBreakpoint } from "../../dynamic/breakpoint";
import viewportCSS from "./viewportCSS";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    updateBreakpoint();
    viewportCSS();
  });
};