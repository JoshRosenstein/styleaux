import { TextSizeAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTSIZEADJUST = 'textSizeAdjust';

export interface TextSizeAdjustProps<T = TextSizeAdjustProperty> {
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  [TEXTSIZEADJUST]: T;
}

export const createTextSizeAdjust = <
  T = TextSizeAdjustProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<TextSizeAdjustProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<TextSizeAdjustProps<T>, Theme, Media>({
    cssProp: TEXTSIZEADJUST,
    prop: TEXTSIZEADJUST,
    key,
    transformValue,
  });

export const createTextSizeAdjustRule = <
  T = TextSizeAdjustProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTSIZEADJUST, getValue: transformer });

export const textSizeAdjust = createTextSizeAdjust();

export const textSizeAdjustRule = createTextSizeAdjustRule();
