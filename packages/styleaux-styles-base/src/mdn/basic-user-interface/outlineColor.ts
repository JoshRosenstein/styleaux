import { Config } from '../../types';
import { OutlineColorProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const OUTLINECOLOR = 'outlineColor';

export interface OutlineColorProps<T = OutlineColorProperty> {
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  [OUTLINECOLOR]: T;
}

export const createOutlineColor = <
  T = OutlineColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<OutlineColorProps<T>, Theme> = {},
) =>
  style<OutlineColorProps<T>, Theme, Media>({
    cssProp: OUTLINECOLOR,
    prop: OUTLINECOLOR,
    ...config,
  });

export const createOutlineColorRule = <T = OutlineColorProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OUTLINECOLOR, getValue: transformer });

export const outlineColor = createOutlineColor();

export const outlineColorRule = createOutlineColorRule();
