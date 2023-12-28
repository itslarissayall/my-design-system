import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },
  black: { value: '#000' },
  white: { value: '#fff' },
  gray: {
    50: { value: '#F8F8F8' },
    100: { value: '#707070' },
    200: { value: '#595959' },
    300: { value: '#333333' },
    400: { value: '#121212' },
  },
  yellow: {
    50: { value: '#fefce8' },
    100: { value: '#fef9c3' },
    200: { value: '#fef08a' },
    300: { value: '#FFD700' },
    400: { value: '#FFC107' }
  },
  blue: {
    50: { value: '#eff6ff' },
    100: { value: '#dbeafe' },
    200: { value: '#bfdbfe' },
    300: { value: '#1976D2' },
    400: { value: '#2196F3' }
  }
})
