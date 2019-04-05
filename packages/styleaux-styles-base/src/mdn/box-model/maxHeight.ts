import { MaxHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MAXHEIGHT='maxHeight'

export interface IMaxHeightProps<T> {
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight: T;
}

export const createMaxHeight = <
  T = MaxHeightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaxHeightProps<T>, Theme, Breakpoints>({
    cssProp: MAXHEIGHT,
    prop: MAXHEIGHT,
    alias,
    key,
    transformValue,
  })

export const createMaxHeightRule = <T = MaxHeightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MAXHEIGHT, getValue: transformer})

export const maxHeight =createMaxHeight()

export const maxHeightRule =createMaxHeightRule()
