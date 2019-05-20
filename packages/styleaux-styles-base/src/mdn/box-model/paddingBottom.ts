import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PaddingBottomProperty } from '@styleaux/csstype';

const PADDINGBOTTOM = 'paddingBottom';

export interface PaddingBottomProps<T = PaddingBottomProperty> {
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  [PADDINGBOTTOM]: T;
}

export const createPaddingBottom = <
  T = PaddingBottomProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingBottomProps<T>, Theme> = {},
) =>
  style<PaddingBottomProps<T>, Theme, Media>({
    cssProp: PADDINGBOTTOM,
    prop: PADDINGBOTTOM,
    ...config,
  });

export const createPaddingBottomRule = <T = PaddingBottomProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGBOTTOM, getValue: transformer });

export const paddingBottom = createPaddingBottom();

export const paddingBottomRule = createPaddingBottomRule();
