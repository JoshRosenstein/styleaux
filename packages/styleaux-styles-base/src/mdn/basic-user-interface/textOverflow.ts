import { TextOverflowProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTOVERFLOW='textOverflow'

export interface ITextOverflowProps<T> {
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow: T;
}

export const textOverflow = <
  T = TextOverflowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextOverflowProps<T>, Theme, Breakpoints>({
    cssProp: TEXTOVERFLOW,
    prop: TEXTOVERFLOW,
    alias,
    key,
    transformValue,
  })

export const textOverflowRule = <T = TextOverflowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTOVERFLOW, getValue: transformer})
