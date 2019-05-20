import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextDecorationSkipInkProperty } from '@styleaux/csstype';

const TEXTDECORATIONSKIPINK = 'textDecorationSkipInk';

export interface TextDecorationSkipInkProps<T = TextDecorationSkipInkProperty> {
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  [TEXTDECORATIONSKIPINK]: T;
}

export const createTextDecorationSkipInk = <
  T = TextDecorationSkipInkProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextDecorationSkipInkProps<T>, Theme> = {},
) =>
  style<TextDecorationSkipInkProps<T>, Theme, Media>({
    cssProp: TEXTDECORATIONSKIPINK,
    prop: TEXTDECORATIONSKIPINK,
    ...config,
  });

export const createTextDecorationSkipInkRule = <
  T = TextDecorationSkipInkProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTDECORATIONSKIPINK, getValue: transformer });

export const textDecorationSkipInk = createTextDecorationSkipInk();

export const textDecorationSkipInkRule = createTextDecorationSkipInkRule();
