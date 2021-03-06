import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderLeftWidthProperty } from '@styleaux/csstype';

const BORDERLEFTWIDTH = 'borderLeftWidth';

export interface BorderLeftWidthProps<T = BorderLeftWidthProperty> {
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  [BORDERLEFTWIDTH]: T;
}

export const createBorderLeftWidth = <
  T = BorderLeftWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderLeftWidthProps<T>, Theme> = {},
) =>
  style<BorderLeftWidthProps<T>, Theme, Media>({
    cssProp: BORDERLEFTWIDTH,
    prop: BORDERLEFTWIDTH,
    ...config,
  });

export const createBorderLeftWidthRule = <
  T = BorderLeftWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERLEFTWIDTH, getValue: transformer });

export const borderLeftWidth = createBorderLeftWidth();

export const borderLeftWidthRule = createBorderLeftWidthRule();
