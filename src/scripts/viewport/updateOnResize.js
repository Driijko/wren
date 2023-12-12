import { updateBreakpoint } from "../../dynamic/viewport";
import viewportCSS from "./viewportCSS";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    updateBreakpoint();
    viewportCSS();
  });
};