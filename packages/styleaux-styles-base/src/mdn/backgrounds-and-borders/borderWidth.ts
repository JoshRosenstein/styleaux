import { Config } from '../../types';
import { BorderWidthProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERWIDTH = 'borderWidth';

export interface BorderWidthProps<T = BorderWidthProperty> {
  /**
   * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  [BORDERWIDTH]: T;
}

export const createBorderWidth = <
  T = BorderWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderWidthProps<T>, Theme> = {},
) =>
  style<BorderWidthProps<T>, Theme, Media>({
    cssProp: BORDERWIDTH,
    prop: BORDERWIDTH,
    ...config,
  });

export const createBorderWidthRule = <T = BorderWidthProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERWIDTH, getValue: transformer });

export const borderWidth = createBorderWidth();

export const borderWidthRule = createBorderWidthRule();
