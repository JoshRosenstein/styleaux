import { WidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WIDTH='width'

export interface WidthProps<T=WidthProperty> {
  /**
   * The **`width`** CSS property sets an element's width. By default it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  [WIDTH]: T;
}

export const createWidth = <
  T = WidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<WidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<WidthProps<T>,Theme,Media>({
    cssProp:WIDTH,
    prop:WIDTH,
    key,
    transformValue,
  })

export const createWidthRule = <T = WidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: WIDTH, getValue: transformer})

export const width =createWidth()

export const widthRule =createWidthRule()
