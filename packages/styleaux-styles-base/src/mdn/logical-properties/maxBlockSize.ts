import { MaxBlockSizeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MAXBLOCKSIZE='maxBlockSize'

export interface IMaxBlockSizeProps<T> {
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  maxBlockSize: T;
}

export const maxBlockSize = <
  T = MaxBlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaxBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: MAXBLOCKSIZE,
    prop: MAXBLOCKSIZE,
    alias,
    key,
    transformValue,
  })

export const maxBlockSizeRule = <T = MaxBlockSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MAXBLOCKSIZE, getValue: transformer})
