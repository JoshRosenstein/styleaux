import { Config } from '../../types';
import { MarginRightProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MARGINRIGHT = 'marginRight';

export interface MarginRightProps<T = MarginRightProperty> {
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  [MARGINRIGHT]: T;
}

export const createMarginRight = <
  T = MarginRightProperty,
  Media = never,
  Theme = never
>(
  config: Config<MarginRightProps<T>, Theme> = {},
) =>
  style<MarginRightProps<T>, Theme, Media>({
    cssProp: MARGINRIGHT,
    prop: MARGINRIGHT,
    ...config,
  });

export const createMarginRightRule = <T = MarginRightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGINRIGHT, getValue: transformer });

export const marginRight = createMarginRight();

export const marginRightRule = createMarginRightRule();
