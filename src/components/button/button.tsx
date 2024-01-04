import { StyledButton } from "./button.style";
import { IButton } from "./types";

export const Button = ({ children, colorMode, size, type }: IButton) => {
  return <StyledButton type={type} size={size} data-color-mode={colorMode}>{children}</StyledButton>;
};
