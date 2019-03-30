import { BlockSizeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BLOCKSIZE='blockSize'

export interface IBlockSizeProps<T> {
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize: T;
}

export const blockSize = <
  T = BlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: BLOCKSIZE,
    prop: BLOCKSIZE,
    alias,
    key,
    transformValue,
  })

export const blockSizeRule = <T = BlockSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BLOCKSIZE, getValue: transformer})
