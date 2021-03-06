import { Config } from '../../types';
import { MinBlockSizeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MINBLOCKSIZE = 'minBlockSize';

export interface MinBlockSizeProps<T = MinBlockSizeProperty> {
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  [MINBLOCKSIZE]: T;
}

export const createMinBlockSize = <
  T = MinBlockSizeProperty,
  Media = never,
  Theme = never
>(
  config: Config<MinBlockSizeProps<T>, Theme> = {},
) =>
  style<MinBlockSizeProps<T>, Theme, Media>({
    cssProp: MINBLOCKSIZE,
    prop: MINBLOCKSIZE,
    ...config,
  });

export const createMinBlockSizeRule = <T = MinBlockSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MINBLOCKSIZE, getValue: transformer });

export const minBlockSize = createMinBlockSize();

export const minBlockSizeRule = createMinBlockSizeRule();
