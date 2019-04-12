import { OutlineWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OUTLINEWIDTH='outlineWidth'

export interface OutlineWidthProps<T=OutlineWidthProperty> {
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  [OUTLINEWIDTH]: T;
}

export const createOutlineWidth = <
  T = OutlineWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OutlineWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OutlineWidthProps<T>,Theme,Media>({
    cssProp:OUTLINEWIDTH,
    prop:OUTLINEWIDTH,
    key,
    transformValue,
  })

export const createOutlineWidthRule = <T = OutlineWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OUTLINEWIDTH, getValue: transformer})

export const outlineWidth =createOutlineWidth()

export const outlineWidthRule =createOutlineWidthRule()
