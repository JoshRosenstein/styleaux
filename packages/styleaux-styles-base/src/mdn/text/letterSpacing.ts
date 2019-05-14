import { LetterSpacingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LETTERSPACING = 'letterSpacing';

export interface LetterSpacingProps<T = LetterSpacingProperty> {
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  [LETTERSPACING]: T;
}

export const createLetterSpacing = <
  T = LetterSpacingProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<LetterSpacingProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<LetterSpacingProps<T>, Theme, Media>({
    cssProp: LETTERSPACING,
    prop: LETTERSPACING,
    key,
    transform,
  });

export const createLetterSpacingRule = <T = LetterSpacingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LETTERSPACING, getValue: transformer });

export const letterSpacing = createLetterSpacing();

export const letterSpacingRule = createLetterSpacingRule();
