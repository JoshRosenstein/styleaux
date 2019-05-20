import { Config } from '../../types';
import { MarginBottomProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MARGINBOTTOM = 'marginBottom';

export interface MarginBottomProps<T = MarginBottomProperty> {
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  [MARGINBOTTOM]: T;
}

export const createMarginBottom = <
  T = MarginBottomProperty,
  Media = never,
  Theme = never
>(
  config: Config<MarginBottomProps<T>, Theme> = {},
) =>
  style<MarginBottomProps<T>, Theme, Media>({
    cssProp: MARGINBOTTOM,
    prop: MARGINBOTTOM,
    ...config,
  });

export const createMarginBottomRule = <T = MarginBottomProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGINBOTTOM, getValue: transformer });

export const marginBottom = createMarginBottom();

export const marginBottomRule = createMarginBottomRule();
