import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { AnimationNameProperty } from '@styleaux/csstype';

const ANIMATIONNAME = 'animationName';

export interface AnimationNameProps<T = AnimationNameProperty> {
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  [ANIMATIONNAME]: T;
}

export const createAnimationName = <
  T = AnimationNameProperty,
  Media = never,
  Theme = never
>(
  config: Config<AnimationNameProps<T>, Theme> = {},
) =>
  style<AnimationNameProps<T>, Theme, Media>({
    cssProp: ANIMATIONNAME,
    prop: ANIMATIONNAME,
    ...config,
  });

export const createAnimationNameRule = <T = AnimationNameProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONNAME, getValue: transformer });

export const animationName = createAnimationName();

export const animationNameRule = createAnimationNameRule();
