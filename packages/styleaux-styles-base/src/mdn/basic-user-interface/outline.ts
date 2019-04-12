import { OutlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OUTLINE='outline'

export interface OutlineProps<T=OutlineProperty> {
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  [OUTLINE]: T;
}

export const createOutline = <
  T = OutlineProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OutlineProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OutlineProps<T>,Theme,Media>({
    cssProp:OUTLINE,
    prop:OUTLINE,
    key,
    transformValue,
  })

export const createOutlineRule = <T = OutlineProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OUTLINE, getValue: transformer})

export const outline =createOutline()

export const outlineRule =createOutlineRule()
