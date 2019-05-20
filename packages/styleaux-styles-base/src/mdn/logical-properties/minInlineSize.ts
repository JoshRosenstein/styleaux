import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { MinInlineSizeProperty } from '@styleaux/csstype';

const MININLINESIZE = 'minInlineSize';

export interface MinInlineSizeProps<T = MinInlineSizeProperty> {
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  [MININLINESIZE]: T;
}

export const createMinInlineSize = <
  T = MinInlineSizeProperty,
  Media = never,
  Theme = never
>(
  config: Config<MinInlineSizeProps<T>, Theme> = {},
) =>
  style<MinInlineSizeProps<T>, Theme, Media>({
    cssProp: MININLINESIZE,
    prop: MININLINESIZE,
    ...config,
  });

export const createMinInlineSizeRule = <T = MinInlineSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MININLINESIZE, getValue: transformer });

export const minInlineSize = createMinInlineSize();

export const minInlineSizeRule = createMinInlineSizeRule();
