import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderImageSourceProperty } from '@styleaux/csstype';

const BORDERIMAGESOURCE = 'borderImageSource';

export interface BorderImageSourceProps<T = BorderImageSourceProperty> {
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  [BORDERIMAGESOURCE]: T;
}

export const createBorderImageSource = <
  T = BorderImageSourceProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderImageSourceProps<T>, Theme> = {},
) =>
  style<BorderImageSourceProps<T>, Theme, Media>({
    cssProp: BORDERIMAGESOURCE,
    prop: BORDERIMAGESOURCE,
    ...config,
  });

export const createBorderImageSourceRule = <
  T = BorderImageSourceProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGESOURCE, getValue: transformer });

export const borderImageSource = createBorderImageSource();

export const borderImageSourceRule = createBorderImageSourceRule();
