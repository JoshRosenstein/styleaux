import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderRightWidthProperty } from '@styleaux/csstype';

const BORDERRIGHTWIDTH = 'borderRightWidth';

export interface BorderRightWidthProps<T = BorderRightWidthProperty> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  [BORDERRIGHTWIDTH]: T;
}

export const createBorderRightWidth = <
  T = BorderRightWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderRightWidthProps<T>, Theme> = {},
) =>
  style<BorderRightWidthProps<T>, Theme, Media>({
    cssProp: BORDERRIGHTWIDTH,
    prop: BORDERRIGHTWIDTH,
    ...config,
  });

export const createBorderRightWidthRule = <
  T = BorderRightWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRIGHTWIDTH, getValue: transformer });

export const borderRightWidth = createBorderRightWidth();

export const borderRightWidthRule = createBorderRightWidthRule();
