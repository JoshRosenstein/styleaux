import { styler, StylerOptions } from './styler'
import * as CSS from '@styleaux/csstype'

/**
 * Short wrapper for {@link styler}
 * @remarks
 * TODO
 *
 * @param cssProp - CSS property or Selector
 * @param getValue - (input, props, mediaKey) => CSSObj
 * @param [wrapper=identity]  - transformer
 *
 * @example
 *
 *  const style=createStyles({
 *    display: rule('display')
 *  }))
 *
*/
export function rule<T, P extends {} = never>(cssProp: keyof CSS.Properties, getValue?: StylerOptions<P, T>['getValue']) {
  return styler<T, P>({
    cssProp,
    getValue,
  })
}
