import {styler} from './styler'
import {CSSProperties} from '../cssTypes'

export function rule<T>(cssProp: keyof CSSProperties , getValue?: any) {
  return styler<T>({
    cssProp,
    getValue,
  })
}
