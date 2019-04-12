import { FloatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLOAT='float'

export interface FloatProps<T=FloatProperty> {
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  [FLOAT]: T;
}

export const createFloat = <
  T = FloatProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FloatProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FloatProps<T>,Theme,Media>({
    cssProp:FLOAT,
    prop:FLOAT,
    key,
    transformValue,
  })

export const createFloatRule = <T = FloatProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FLOAT, getValue: transformer})

export const float =createFloat()

export const floatRule =createFloatRule()
