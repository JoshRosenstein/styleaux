import { AlignSelfProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ALIGNSELF='alignSelf'

export interface IAlignSelfProps<T> {
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf: T;
}

export const alignSelf = <
  T = AlignSelfProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAlignSelfProps<T>, Theme, Breakpoints>({
    cssProp: ALIGNSELF,
    prop: ALIGNSELF,
    alias,
    key,
    transformValue,
  })

export const alignSelfRule = <T = AlignSelfProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ALIGNSELF, getValue: transformer})
