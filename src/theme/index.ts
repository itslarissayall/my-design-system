import type { Preset } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { tokens } from './tokens'
import { keyframes } from './keyframes'

const definePreset = <T extends Preset>(config: T) => config

export const preset = definePreset({
  theme: {
    keyframes,
    breakpoints,
    tokens,
  },
})

export default preset
