import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextSizeAdjustProperty } from '@styleaux/csstype';

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
>(
  config: Config<TextSizeAdjustProps<T>, Theme> = {},
) =>
  style<TextSizeAdjustProps<T>, Theme, Media>({
    cssProp: TEXTSIZEADJUST,
    prop: TEXTSIZEADJUST,
    ...config,
  });

export const createTextSizeAdjustRule = <
  T = TextSizeAdjustProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTSIZEADJUST, getValue: transformer });

export const textSizeAdjust = createTextSizeAdjust();

export const textSizeAdjustRule = createTextSizeAdjustRule();
