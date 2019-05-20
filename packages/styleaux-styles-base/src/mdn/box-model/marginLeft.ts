import { Config } from '../../types';
import { MarginLeftProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MARGINLEFT = 'marginLeft';

export interface MarginLeftProps<T = MarginLeftProperty> {
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  [MARGINLEFT]: T;
}

export const createMarginLeft = <
  T = MarginLeftProperty,
  Media = never,
  Theme = never
>(
  config: Config<MarginLeftProps<T>, Theme> = {},
) =>
  style<MarginLeftProps<T>, Theme, Media>({
    cssProp: MARGINLEFT,
    prop: MARGINLEFT,
    ...config,
  });

export const createMarginLeftRule = <T = MarginLeftProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGINLEFT, getValue: transformer });

export const marginLeft = createMarginLeft();

export const marginLeftRule = createMarginLeftRule();
