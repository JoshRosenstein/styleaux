import { MinWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MINWIDTH='minWidth'

export interface MinWidthProps<T=MinWidthProperty> {
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  [MINWIDTH]: T;
}

export const createMinWidth = <
  T = MinWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MinWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MinWidthProps<T>,Theme,Media>({
    cssProp:MINWIDTH,
    prop:MINWIDTH,
    key,
    transformValue,
  })

export const createMinWidthRule = <T = MinWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MINWIDTH, getValue: transformer})

export const minWidth =createMinWidth()

export const minWidthRule =createMinWidthRule()
