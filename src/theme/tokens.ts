import { defineTokens } from '@pandacss/dev'
import { colors } from './colors'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'
import { spacing } from './spacing'
import { sizes } from './sizes'
import { borders, radii } from './borders'

export const tokens = defineTokens({
  colors,
  fontWeights,
  lineHeights,
  fonts,
  letterSpacings,
  fontSizes,
  spacing, 
  sizes,
  borders,
  radii
})