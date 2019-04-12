import { OverflowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OVERFLOW='overflow'

export interface OverflowProps<T=OverflowProperty> {
  /**
   * The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  [OVERFLOW]: T;
}

export const createOverflow = <
  T = OverflowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OverflowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OverflowProps<T>,Theme,Media>({
    cssProp:OVERFLOW,
    prop:OVERFLOW,
    key,
    transformValue,
  })

export const createOverflowRule = <T = OverflowProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OVERFLOW, getValue: transformer})

export const overflow =createOverflow()

export const overflowRule =createOverflowRule()
