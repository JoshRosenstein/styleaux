import {styler,Getter} from './styler'
import * as CSS from '@styleaux/csstype'

export function rule<T,P =unknown>(cssProp: keyof CSS.Properties , getValue?: Getter<T,P>) {
  return styler<T,P>({
    cssProp,
    getValue,
  })
}
