import { Config } from '../../types';
import { BorderImageProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERIMAGE = 'borderImage';

export interface BorderImageProps<T = BorderImageProperty> {
  /**
   * The **`border-image`** CSS property draws an image in place of an element's `border-style`.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  [BORDERIMAGE]: T;
}

export const createBorderImage = <
  T = BorderImageProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderImageProps<T>, Theme> = {},
) =>
  style<BorderImageProps<T>, Theme, Media>({
    cssProp: BORDERIMAGE,
    prop: BORDERIMAGE,
    ...config,
  });

export const createBorderImageRule = <T = BorderImageProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGE, getValue: transformer });

export const borderImage = createBorderImage();

export const borderImageRule = createBorderImageRule();
