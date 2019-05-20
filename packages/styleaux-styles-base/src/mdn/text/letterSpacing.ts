import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { LetterSpacingProperty } from '@styleaux/csstype';

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
>(
  config: Config<LetterSpacingProps<T>, Theme> = {},
) =>
  style<LetterSpacingProps<T>, Theme, Media>({
    cssProp: LETTERSPACING,
    prop: LETTERSPACING,
    ...config,
  });

export const createLetterSpacingRule = <T = LetterSpacingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LETTERSPACING, getValue: transformer });

export const letterSpacing = createLetterSpacing();

export const letterSpacingRule = createLetterSpacingRule();
