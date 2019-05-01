import { OutlineStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OUTLINESTYLE='outlineStyle'

export interface OutlineStyleProps<T=OutlineStyleProperty> {
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  [OUTLINESTYLE]: T;
}

export const createOutlineStyle = <
  T = OutlineStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OutlineStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OutlineStyleProps<T>,Theme,Media>({
    cssProp:OUTLINESTYLE,
    prop:OUTLINESTYLE,
    key,
    transformValue,
  })

export const createOutlineStyleRule = <T = OutlineStyleProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: OUTLINESTYLE, getValue: transformer})

export const outlineStyle =createOutlineStyle()

export const outlineStyleRule =createOutlineStyleRule()
