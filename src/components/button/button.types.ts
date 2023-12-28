import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  colorMode: "light" | "dark";
  size: "lg" | "md" | "sm";
  type: "primary" | "highlight";
}
