import { OutlineOffsetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OUTLINEOFFSET='outlineOffset'

export interface OutlineOffsetProps<T=OutlineOffsetProperty> {
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  [OUTLINEOFFSET]: T;
}

export const createOutlineOffset = <
  T = OutlineOffsetProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OutlineOffsetProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OutlineOffsetProps<T>,Theme,Media>({
    cssProp:OUTLINEOFFSET,
    prop:OUTLINEOFFSET,
    key,
    transformValue,
  })

export const createOutlineOffsetRule = <T = OutlineOffsetProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: OUTLINEOFFSET, getValue: transformer})

export const outlineOffset =createOutlineOffset()

export const outlineOffsetRule =createOutlineOffsetRule()
