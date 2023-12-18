import { writable } from "svelte/store";

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    return "desktop";
  };
};

function determineWidth() {
  if (window.innerWidth < 500) {
    return "narrow";
  } else {
     return "wide"
  };
};

export const breakpoint = writable(determineBreakpoint());
export const vpwidth = writable(window.innerWidth);
export const width = writable(determineWidth());

export function updateViewport() {
  breakpoint.set(determineBreakpoint());
  vpwidth.set(window.innerWidth);
  width.set(determineWidth());
};