import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderImageOutsetProperty } from '@styleaux/csstype';

const BORDERIMAGEOUTSET = 'borderImageOutset';

export interface BorderImageOutsetProps<T = BorderImageOutsetProperty> {
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  [BORDERIMAGEOUTSET]: T;
}

export const createBorderImageOutset = <
  T = BorderImageOutsetProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderImageOutsetProps<T>, Theme> = {},
) =>
  style<BorderImageOutsetProps<T>, Theme, Media>({
    cssProp: BORDERIMAGEOUTSET,
    prop: BORDERIMAGEOUTSET,
    ...config,
  });

export const createBorderImageOutsetRule = <
  T = BorderImageOutsetProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGEOUTSET, getValue: transformer });

export const borderImageOutset = createBorderImageOutset();

export const borderImageOutsetRule = createBorderImageOutsetRule();
