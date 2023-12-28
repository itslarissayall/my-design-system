import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      value: {
        base: '{colors.white}',
        _dark: '{colors.gray.400}'
      }
    },
    secondary: {
      value: {
        base: '{colors.gray.50}',
        _dark: '{colors.gray.200}'
      }
    },
    highlight: {
      value: {
        base: '{colors.yellow.400}',
        _dark: '{colors.yellow.400}'
      }
    },
    bg: {
      primary: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.gray.400}'
        }
      },
      secondary: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.300}'
        }
      }
    },
    text: {
      primary: {
        value: { base: '{colors.gray.400}', _dark: '{colors.white}' }
      },
      secondary: {
        value: { base: '{colors.gray.200}', _dark: '{colors.gray.50}' }
      },
      highlight: {
        value: {
          base: '{color.yellow.400}',
          _dark: '{colors.yellow.400}'
        }
      }
    }
  }
})
