import { Config } from '../../types';
import { PaddingRightProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const PADDINGRIGHT = 'paddingRight';

export interface PaddingRightProps<T = PaddingRightProperty> {
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  [PADDINGRIGHT]: T;
}

export const createPaddingRight = <
  T = PaddingRightProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingRightProps<T>, Theme> = {},
) =>
  style<PaddingRightProps<T>, Theme, Media>({
    cssProp: PADDINGRIGHT,
    prop: PADDINGRIGHT,
    ...config,
  });

export const createPaddingRightRule = <T = PaddingRightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGRIGHT, getValue: transformer });

export const paddingRight = createPaddingRight();

export const paddingRightRule = createPaddingRightRule();
