import { MaxBlockSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MAXBLOCKSIZE='maxBlockSize'

export interface MaxBlockSizeProps<T=MaxBlockSizeProperty> {
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  [MAXBLOCKSIZE]: T;
}

export const createMaxBlockSize = <
  T = MaxBlockSizeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaxBlockSizeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaxBlockSizeProps<T>,Theme,Media>({
    cssProp:MAXBLOCKSIZE,
    prop:MAXBLOCKSIZE,
    key,
    transformValue,
  })

export const createMaxBlockSizeRule = <T = MaxBlockSizeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MAXBLOCKSIZE, getValue: transformer})

export const maxBlockSize =createMaxBlockSize()

export const maxBlockSizeRule =createMaxBlockSizeRule()
