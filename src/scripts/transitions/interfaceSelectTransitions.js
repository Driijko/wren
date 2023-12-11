import { quintOut, quintIn, sineOut } from "svelte/easing";

export function interfaceSelectTransitionsMobile() {
  return {
    animate: {
      duration: 700,
      delay: 300,
      easing: sineOut
    },
    in: {
      duration: 1000,
      x: -window.innerWidth,
      easing: quintOut
    },
    out: {
      duration: 500,
      x: -window.innerWidth,
      easing: quintIn
    }
  };
};