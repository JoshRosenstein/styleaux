import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderImageWidthProperty } from '@styleaux/csstype';

const BORDERIMAGEWIDTH = 'borderImageWidth';

export interface BorderImageWidthProps<T = BorderImageWidthProperty> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  [BORDERIMAGEWIDTH]: T;
}

export const createBorderImageWidth = <
  T = BorderImageWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderImageWidthProps<T>, Theme> = {},
) =>
  style<BorderImageWidthProps<T>, Theme, Media>({
    cssProp: BORDERIMAGEWIDTH,
    prop: BORDERIMAGEWIDTH,
    ...config,
  });

export const createBorderImageWidthRule = <
  T = BorderImageWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGEWIDTH, getValue: transformer });

export const borderImageWidth = createBorderImageWidth();

export const borderImageWidthRule = createBorderImageWidthRule();
