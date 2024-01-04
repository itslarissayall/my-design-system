
import { FontSizeTokens, FontWeightsTokens } from "@/types";
import type { Tokens } from "@pandacss/types";

export const fontSizes: FontSizeTokens = {
  "2xs": { value: "0.5rem" },
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  "3xl": { value: "1.875rem" },
  "4xl": { value: "2.25rem" },
};

export const fontWeights: FontWeightsTokens = {
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" },
};

export const letterSpacings: Tokens["letterSpacings"] = {
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  normal: { value: "0em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" },
};

export const lineHeights: Tokens["lineHeights"] = {
  none: { value: "1" },
  tight: { value: "1.25" },
  snug: { value: "1.375" },
  normal: { value: "1.5" },
  relaxed: { value: "1.625" },
  loose: { value: "2" },
};

export const fonts: Tokens["fonts"] = {
  heading: { value:'"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif' },
  body: { value: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' },
};

