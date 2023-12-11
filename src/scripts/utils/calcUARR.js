export default function calcUARR(
  containerWidth, containerHeight, 
  aspectRatioWidth, aspectRatioHeight, 
) {
  const containerAspectRatio = containerWidth / containerHeight;
  const widthByHeight = aspectRatioWidth/aspectRatioHeight;
  const heightByWidth = aspectRatioHeight/aspectRatioWidth;

  if (containerAspectRatio > widthByHeight) {
    return {
      width: containerHeight * widthByHeight,
      height: containerHeight 
    };
  } else {
    return {
      width: containerWidth,
      height: containerWidth * heightByWidth,
    };
  };
};