import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBottomWidthProperty } from '@styleaux/csstype';

const BORDERBOTTOMWIDTH = 'borderBottomWidth';

export interface BorderBottomWidthProps<T = BorderBottomWidthProperty> {
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  [BORDERBOTTOMWIDTH]: T;
}

export const createBorderBottomWidth = <
  T = BorderBottomWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBottomWidthProps<T>, Theme> = {},
) =>
  style<BorderBottomWidthProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMWIDTH,
    prop: BORDERBOTTOMWIDTH,
    ...config,
  });

export const createBorderBottomWidthRule = <
  T = BorderBottomWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMWIDTH, getValue: transformer });

export const borderBottomWidth = createBorderBottomWidth();

export const borderBottomWidthRule = createBorderBottomWidthRule();
