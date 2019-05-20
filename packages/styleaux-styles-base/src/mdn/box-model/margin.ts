import { Config } from '../../types';
import { MarginProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MARGIN = 'margin';

export interface MarginProps<T = MarginProperty> {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  [MARGIN]: T;
}

export const createMargin = <T = MarginProperty, Media = never, Theme = never>(
  config: Config<MarginProps<T>, Theme> = {},
) =>
  style<MarginProps<T>, Theme, Media>({
    cssProp: MARGIN,
    prop: MARGIN,
    ...config,
  });

export const createMarginRule = <T = MarginProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGIN, getValue: transformer });

export const margin = createMargin();

export const marginRule = createMarginRule();
