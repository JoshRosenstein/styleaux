import { MaxWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MAXWIDTH='maxWidth'

export interface IMaxWidthProps<T> {
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth: T;
}

export const maxWidth = <
  T = MaxWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaxWidthProps<T>, Theme, Breakpoints>({
    cssProp: MAXWIDTH,
    prop: MAXWIDTH,
    alias,
    key,
    transformValue,
  })

export const maxWidthRule = <T = MaxWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MAXWIDTH, getValue: transformer})
