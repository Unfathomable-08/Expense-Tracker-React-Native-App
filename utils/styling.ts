import { Dimensions, PixelRatio } from "react-native";

// Actual width and height of device
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// It can be in portrait or landscape mode, so we find the short and long dimension
const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

// Width and height we assumed, or of our design (Figma, etc.)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// If mobile width/height is less than assumed width/height, scale down the value
// If mobile width/height is greater than assumed width/height, scale up the value
// So, our design looks proportional on all devices


// For width
export const scale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (shortDimension / guidelineBaseWidth) * (size as number)
    )
  );

// For height
export const verticalScale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (longDimension / guidelineBaseHeight) * (size as number)
    )
  );
