import { Config } from '../../types';
import { BorderTopProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERTOP = 'borderTop';

export interface BorderTopProps<T = BorderTopProperty> {
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  [BORDERTOP]: T;
}

export const createBorderTop = <
  T = BorderTopProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderTopProps<T>, Theme> = {},
) =>
  style<BorderTopProps<T>, Theme, Media>({
    cssProp: BORDERTOP,
    prop: BORDERTOP,
    ...config,
  });

export const createBorderTopRule = <T = BorderTopProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOP, getValue: transformer });

export const borderTop = createBorderTop();

export const borderTopRule = createBorderTopRule();
