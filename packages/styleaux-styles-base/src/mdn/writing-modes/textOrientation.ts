import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextOrientationProperty } from '@styleaux/csstype';

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
>(
  config: Config<TextOrientationProps<T>, Theme> = {},
) =>
  style<TextOrientationProps<T>, Theme, Media>({
    cssProp: TEXTORIENTATION,
    prop: TEXTORIENTATION,
    ...config,
  });

export const createTextOrientationRule = <
  T = TextOrientationProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTORIENTATION, getValue: transformer });

export const textOrientation = createTextOrientation();

export const textOrientationRule = createTextOrientationRule();
