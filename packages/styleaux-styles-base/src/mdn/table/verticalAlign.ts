import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { VerticalAlignProperty } from '@styleaux/csstype';

const VERTICALALIGN = 'verticalAlign';

export interface VerticalAlignProps<T = VerticalAlignProperty> {
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  [VERTICALALIGN]: T;
}

export const createVerticalAlign = <
  T = VerticalAlignProperty,
  Media = never,
  Theme = never
>(
  config: Config<VerticalAlignProps<T>, Theme> = {},
) =>
  style<VerticalAlignProps<T>, Theme, Media>({
    cssProp: VERTICALALIGN,
    prop: VERTICALALIGN,
    ...config,
  });

export const createVerticalAlignRule = <T = VerticalAlignProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: VERTICALALIGN, getValue: transformer });

export const verticalAlign = createVerticalAlign();

export const verticalAlignRule = createVerticalAlignRule();
