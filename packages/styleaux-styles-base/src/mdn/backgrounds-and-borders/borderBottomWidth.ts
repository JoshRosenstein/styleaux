import { BorderBottomWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMWIDTH='borderBottomWidth'

export interface BorderBottomWidthProps<T=BorderBottomWidthProperty> {
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  [BORDERBOTTOMWIDTH]: T;
}

export const createBorderBottomWidth = <
  T = BorderBottomWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBottomWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBottomWidthProps<T>,Theme,Media>({
    cssProp:BORDERBOTTOMWIDTH,
    prop:BORDERBOTTOMWIDTH,
    key,
    transformValue,
  })

export const createBorderBottomWidthRule = <T = BorderBottomWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERBOTTOMWIDTH, getValue: transformer})

export const borderBottomWidth =createBorderBottomWidth()

export const borderBottomWidthRule =createBorderBottomWidthRule()
