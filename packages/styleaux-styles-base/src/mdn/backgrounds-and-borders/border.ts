import { Config } from '../../types';
import { BorderProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDER = 'border';

export interface BorderProps<T = BorderProperty> {
  /**
   * The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  [BORDER]: T;
}

export const createBorder = <T = BorderProperty, Media = never, Theme = never>(
  config: Config<BorderProps<T>, Theme> = {},
) =>
  style<BorderProps<T>, Theme, Media>({
    cssProp: BORDER,
    prop: BORDER,
    ...config,
  });

export const createBorderRule = <T = BorderProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDER, getValue: transformer });

export const border = createBorder();

export const borderRule = createBorderRule();
