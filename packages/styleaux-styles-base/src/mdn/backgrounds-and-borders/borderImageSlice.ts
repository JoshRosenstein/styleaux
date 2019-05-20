import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderImageSliceProperty } from '@styleaux/csstype';

const BORDERIMAGESLICE = 'borderImageSlice';

export interface BorderImageSliceProps<T = BorderImageSliceProperty> {
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  [BORDERIMAGESLICE]: T;
}

export const createBorderImageSlice = <
  T = BorderImageSliceProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderImageSliceProps<T>, Theme> = {},
) =>
  style<BorderImageSliceProps<T>, Theme, Media>({
    cssProp: BORDERIMAGESLICE,
    prop: BORDERIMAGESLICE,
    ...config,
  });

export const createBorderImageSliceRule = <
  T = BorderImageSliceProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGESLICE, getValue: transformer });

export const borderImageSlice = createBorderImageSlice();

export const borderImageSliceRule = createBorderImageSliceRule();
