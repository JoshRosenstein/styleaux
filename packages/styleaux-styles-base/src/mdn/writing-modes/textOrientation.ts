import { TextOrientationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTORIENTATION = 'textOrientation';

export interface TextOrientationProps<T = TextOrientationProperty> {
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **48** | **41**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  [TEXTORIENTATION]: T;
}

export const createTextOrientation = <
  T = TextOrientationProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextOrientationProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextOrientationProps<T>, Theme, Media>({
    cssProp: TEXTORIENTATION,
    prop: TEXTORIENTATION,
    key,
    transform,
  });

export const createTextOrientationRule = <
  T = TextOrientationProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTORIENTATION, getValue: transformer });

export const textOrientation = createTextOrientation();

export const textOrientationRule = createTextOrientationRule();
