import { StyledButton } from "./button.style";
import { IButtonProps } from "./button.types";

export const Button = ({ children, colorMode, size, type }: IButtonProps) => {
  return <StyledButton type={type} size={size} data-color-mode={colorMode}>{children}</StyledButton>;
};
