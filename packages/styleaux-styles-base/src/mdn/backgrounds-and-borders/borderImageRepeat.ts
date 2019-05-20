import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderImageRepeatProperty } from '@styleaux/csstype';

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
>(
  config: Config<BorderImageRepeatProps<T>, Theme> = {},
) =>
  style<BorderImageRepeatProps<T>, Theme, Media>({
    cssProp: BORDERIMAGEREPEAT,
    prop: BORDERIMAGEREPEAT,
    ...config,
  });

export const createBorderImageRepeatRule = <
  T = BorderImageRepeatProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGEREPEAT, getValue: transformer });

export const borderImageRepeat = createBorderImageRepeat();

export const borderImageRepeatRule = createBorderImageRepeatRule();
