import { Config } from '../../types';
import { PaddingTopProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const PADDINGTOP = 'paddingTop';

export interface PaddingTopProps<T = PaddingTopProperty> {
  /**
   * The **`padding-top`** padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  [PADDINGTOP]: T;
}

export const createPaddingTop = <
  T = PaddingTopProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingTopProps<T>, Theme> = {},
) =>
  style<PaddingTopProps<T>, Theme, Media>({
    cssProp: PADDINGTOP,
    prop: PADDINGTOP,
    ...config,
  });

export const createPaddingTopRule = <T = PaddingTopProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGTOP, getValue: transformer });

export const paddingTop = createPaddingTop();

export const paddingTopRule = createPaddingTopRule();
