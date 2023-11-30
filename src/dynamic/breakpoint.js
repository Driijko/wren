import { writable } from "svelte/store";

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    return "desktop";
  };
};

export const breakpoint = writable(determineBreakpoint());

export function updateBreakpoint() {
  breakpoint.set(determineBreakpoint());
};