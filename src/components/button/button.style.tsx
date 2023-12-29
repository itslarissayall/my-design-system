import { styled } from "@/styled-system/jsx";

export const StyledButton = styled("button", {
 base: {
    cursor: "pointer",
    border: "none",
    rounded: "md",
    fontFamily: 'body',
    _active: {
      opacity: 0.8,
    }
  },
  variants: {
    type: {
      primary: {
        bg: "bg.primary",
        color: "text.primary",
      },
      highlight: {
        bg: "bg.secondary",
        color: "text.highlight",
      }
    },
    size: {
      lg: {
        py: "2",
        px: "4",
      },
      md: {
        py: "1",
        px: "2",
      },
      sm: {
        py: "0.5",
        px: "1",
      }
    }
  },
});
