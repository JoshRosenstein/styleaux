import {styler,Getter} from './styler'
import {CSSProperties} from '../cssTypes'

export function rule<T>(cssProp: keyof CSSProperties , getValue?: Getter) {
  return styler<T>({
    cssProp,
    getValue,
  })
}
