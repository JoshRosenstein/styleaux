import { Config } from '../../types';
import { BorderRightProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERRIGHT = 'borderRight';

export interface BorderRightProps<T = BorderRightProperty> {
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  [BORDERRIGHT]: T;
}

export const createBorderRight = <
  T = BorderRightProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderRightProps<T>, Theme> = {},
) =>
  style<BorderRightProps<T>, Theme, Media>({
    cssProp: BORDERRIGHT,
    prop: BORDERRIGHT,
    ...config,
  });

export const createBorderRightRule = <T = BorderRightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRIGHT, getValue: transformer });

export const borderRight = createBorderRight();

export const borderRightRule = createBorderRightRule();
