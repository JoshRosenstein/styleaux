import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextTransformProperty } from '@styleaux/csstype';

const TEXTTRANSFORM = 'textTransform';

export interface TextTransformProps<T = TextTransformProperty> {
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  [TEXTTRANSFORM]: T;
}

export const createTextTransform = <
  T = TextTransformProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextTransformProps<T>, Theme> = {},
) =>
  style<TextTransformProps<T>, Theme, Media>({
    cssProp: TEXTTRANSFORM,
    prop: TEXTTRANSFORM,
    ...config,
  });

export const createTextTransformRule = <T = TextTransformProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTTRANSFORM, getValue: transformer });

export const textTransform = createTextTransform();

export const textTransformRule = createTextTransformRule();
