import { writable } from "svelte/store";

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    return "desktop";
  };
};

export const breakpoint = writable(determineBreakpoint());
export const vpwidth = writable(window.innerWidth);

export function updateViewport() {
  breakpoint.set(determineBreakpoint());
  vpwidth.set(window.innerWidth);
};