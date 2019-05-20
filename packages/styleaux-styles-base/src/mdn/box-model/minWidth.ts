import { Config } from '../../types';
import { MinWidthProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MINWIDTH = 'minWidth';

export interface MinWidthProps<T = MinWidthProperty> {
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  [MINWIDTH]: T;
}

export const createMinWidth = <
  T = MinWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<MinWidthProps<T>, Theme> = {},
) =>
  style<MinWidthProps<T>, Theme, Media>({
    cssProp: MINWIDTH,
    prop: MINWIDTH,
    ...config,
  });

export const createMinWidthRule = <T = MinWidthProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MINWIDTH, getValue: transformer });

export const minWidth = createMinWidth();

export const minWidthRule = createMinWidthRule();
