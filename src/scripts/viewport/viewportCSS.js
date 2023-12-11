import calcUARR from "../utils/calcUARR";

export default function viewportCSS() {
  let ar; // aspect-ratio
  if (window.innerWidth <= window.innerHeight) {
    ar = [9, 16];
  } else {
    ar = [16, 9];
  };

  const uarr = calcUARR(
    window.innerWidth, window.innerHeight,
    ar[0], ar[1]
  );

  document.documentElement.style.setProperty("--w", `${uarr.width}`);
  document.documentElement.style.setProperty("--h", `${uarr.height}`);
};