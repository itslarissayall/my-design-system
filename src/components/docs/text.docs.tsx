import { styled } from '@/styled-system/jsx'
import { ITextDocs } from './types'

export default function TextDocs({ children, fontWeight }: ITextDocs) {
  return <styled.p fontWeight={fontWeight}>{children}</styled.p>
}
