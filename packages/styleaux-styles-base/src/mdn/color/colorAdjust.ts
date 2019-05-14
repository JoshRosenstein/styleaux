import { ColorAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLORADJUST = 'colorAdjust';

export interface ColorAdjustProps<T = ColorAdjustProperty> {
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  [COLORADJUST]: T;
}

export const createColorAdjust = <
  T = ColorAdjustProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ColorAdjustProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ColorAdjustProps<T>, Theme, Media>({
    cssProp: COLORADJUST,
    prop: COLORADJUST,
    key,
    transform,
  });

export const createColorAdjustRule = <T = ColorAdjustProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLORADJUST, getValue: transformer });

export const colorAdjust = createColorAdjust();

export const colorAdjustRule = createColorAdjustRule();
