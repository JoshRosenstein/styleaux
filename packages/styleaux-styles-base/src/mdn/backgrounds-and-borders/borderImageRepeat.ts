import { BorderImageRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERIMAGEREPEAT = 'borderImageRepeat';

export interface BorderImageRepeatProps<T = BorderImageRepeatProperty> {
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  [BORDERIMAGEREPEAT]: T;
}

export const createBorderImageRepeat = <
  T = BorderImageRepeatProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderImageRepeatProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderImageRepeatProps<T>, Theme, Media>({
    cssProp: BORDERIMAGEREPEAT,
    prop: BORDERIMAGEREPEAT,
    key,
    transform,
  });

export const createBorderImageRepeatRule = <
  T = BorderImageRepeatProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGEREPEAT, getValue: transformer });

export const borderImageRepeat = createBorderImageRepeat();

export const borderImageRepeatRule = createBorderImageRepeatRule();
