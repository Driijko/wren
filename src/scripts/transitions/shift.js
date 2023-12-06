import { cubicOut } from 'svelte/easing';

export default function shift(node, {
		delay = 0,
		duration = 400,
		easing = cubicOut,
		x = 0,
		y = 0,
	} = {}) {
    
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  let xValue = x;
  let xUnit = 'px'
  if (typeof x === 'string') {
    const xMatch = x.match(/([-\d.]+)(\D+)/);
    xValue = Number(xMatch[1]);
    xUnit = xMatch[2];
  }

  let yValue = y;
  let yUnit = 'px'
  if (typeof y === 'string') {
    const yMatch = y.match(/([-\d.]+)(\D+)/);
    yValue = Number(yMatch[1]);
    yUnit = yMatch[2];
  }

  return {
    delay,
    duration,
    easing,
    css: t => `
      transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, 
      ${(1 - t) * yValue}${yUnit});
    `
  };
};