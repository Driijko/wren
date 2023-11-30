import { layout } from "../static/siteSettings";
import { writable } from "svelte/store";

const { breakpointLD } = layout;

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    if (window.innerWidth >= breakpointLD) {
      return "large-desktop";
    } else {
      return "small-desktop";
    };
  };
};

export const breakpoint = writable(determineBreakpoint());

export function updateBreakpoint() {
  breakpoint.set(determineBreakpoint());
};