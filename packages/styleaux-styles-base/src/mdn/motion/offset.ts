import { OffsetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OFFSET='offset'

export interface OffsetProps<T=OffsetProperty> {
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  [OFFSET]: T;
}

export const createOffset = <
  T = OffsetProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OffsetProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OffsetProps<T>,Theme,Media>({
    cssProp:OFFSET,
    prop:OFFSET,
    key,
    transformValue,
  })

export const createOffsetRule = <T = OffsetProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: OFFSET, getValue: transformer})

export const offset =createOffset()

export const offsetRule =createOffsetRule()
