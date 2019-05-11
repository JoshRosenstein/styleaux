import { BlockSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BLOCKSIZE = 'blockSize';

export interface BlockSizeProps<T = BlockSizeProperty> {
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  [BLOCKSIZE]: T;
}

export const createBlockSize = <
  T = BlockSizeProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BlockSizeProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BlockSizeProps<T>, Theme, Media>({
    cssProp: BLOCKSIZE,
    prop: BLOCKSIZE,
    key,
    transformValue,
  });

export const createBlockSizeRule = <T = BlockSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BLOCKSIZE, getValue: transformer });

export const blockSize = createBlockSize();

export const blockSizeRule = createBlockSizeRule();
