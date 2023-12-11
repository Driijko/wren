import updateOnResize from "./updateOnResize";
import viewportCSS from "./viewportCSS";

export default function viewportSetup() {
  viewportCSS();
  updateOnResize();
};