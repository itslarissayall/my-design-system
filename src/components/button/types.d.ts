import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  colorMode: "light" | "dark";
  size: "lg" | "md" | "sm";
  type: "primary" | "highlight";
}
