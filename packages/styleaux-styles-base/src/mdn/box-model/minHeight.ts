import { MinHeightProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MINHEIGHT='minHeight'

export interface IMinHeightProps<T> {
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight: T;
}

export const minHeight = <
  T = MinHeightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMinHeightProps<T>, Theme, Breakpoints>({
    cssProp: MINHEIGHT,
    prop: MINHEIGHT,
    alias,
    key,
    transformValue,
  })

export const minHeightRule = <T = MinHeightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MINHEIGHT, getValue: transformer})
