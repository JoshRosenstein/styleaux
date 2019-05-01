import { WillChangeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WILLCHANGE='willChange'

export interface WillChangeProps<T=WillChangeProperty> {
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  [WILLCHANGE]: T;
}

export const createWillChange = <
  T = WillChangeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<WillChangeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<WillChangeProps<T>,Theme,Media>({
    cssProp:WILLCHANGE,
    prop:WILLCHANGE,
    key,
    transformValue,
  })

export const createWillChangeRule = <T = WillChangeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: WILLCHANGE, getValue: transformer})

export const willChange =createWillChange()

export const willChangeRule =createWillChangeRule()
