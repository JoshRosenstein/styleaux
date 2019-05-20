import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderTopWidthProperty } from '@styleaux/csstype';

const BORDERTOPWIDTH = 'borderTopWidth';

export interface BorderTopWidthProps<T = BorderTopWidthProperty> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  [BORDERTOPWIDTH]: T;
}

export const createBorderTopWidth = <
  T = BorderTopWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderTopWidthProps<T>, Theme> = {},
) =>
  style<BorderTopWidthProps<T>, Theme, Media>({
    cssProp: BORDERTOPWIDTH,
    prop: BORDERTOPWIDTH,
    ...config,
  });

export const createBorderTopWidthRule = <
  T = BorderTopWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPWIDTH, getValue: transformer });

export const borderTopWidth = createBorderTopWidth();

export const borderTopWidthRule = createBorderTopWidthRule();
