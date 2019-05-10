import { Props } from './types';
import { styler, StylerOptions, GetValue } from './styler';

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
export function rule<T, P extends Props>(
  cssProp: StylerOptions<P, any>['cssProp'],
  getValue?: GetValue<T, P>,
) {
  return styler<T, P>({
    cssProp,
    getValue,
  });
}
