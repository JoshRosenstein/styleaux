import { BorderProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDER='border'

export interface BorderProps<T=BorderProperty> {
  /**
   * The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  [BORDER]: T;
}

export const createBorder = <
  T = BorderProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderProps<T>,Theme,Media>({
    cssProp:BORDER,
    prop:BORDER,
    key,
    transformValue,
  })

export const createBorderRule = <T = BorderProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDER, getValue: transformer})

export const border =createBorder()

export const borderRule =createBorderRule()
