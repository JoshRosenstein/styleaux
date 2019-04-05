import { LineHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LINEHEIGHT='lineHeight'

export interface ILineHeightProps<T> {
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight: T;
}

export const createLineHeight = <
  T = LineHeightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ILineHeightProps<T>, Theme, Breakpoints>({
    cssProp: LINEHEIGHT,
    prop: LINEHEIGHT,
    alias,
    key,
    transformValue,
  })

export const createLineHeightRule = <T = LineHeightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LINEHEIGHT, getValue: transformer})

export const lineHeight =createLineHeight()

export const lineHeightRule =createLineHeightRule()
