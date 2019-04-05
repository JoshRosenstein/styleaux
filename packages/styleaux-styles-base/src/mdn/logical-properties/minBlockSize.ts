import { MinBlockSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MINBLOCKSIZE='minBlockSize'

export interface IMinBlockSizeProps<T> {
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize: T;
}

export const createMinBlockSize = <
  T = MinBlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMinBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: MINBLOCKSIZE,
    prop: MINBLOCKSIZE,
    alias,
    key,
    transformValue,
  })

export const createMinBlockSizeRule = <T = MinBlockSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MINBLOCKSIZE, getValue: transformer})

export const minBlockSize =createMinBlockSize()

export const minBlockSizeRule =createMinBlockSizeRule()
