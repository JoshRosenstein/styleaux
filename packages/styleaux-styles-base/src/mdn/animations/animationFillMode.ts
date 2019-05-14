import { AnimationFillModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONFILLMODE = 'animationFillMode';

export interface AnimationFillModeProps<T = AnimationFillModeProperty> {
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **5** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  [ANIMATIONFILLMODE]: T;
}

export const createAnimationFillMode = <
  T = AnimationFillModeProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<AnimationFillModeProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<AnimationFillModeProps<T>, Theme, Media>({
    cssProp: ANIMATIONFILLMODE,
    prop: ANIMATIONFILLMODE,
    key,
    transform,
  });

export const createAnimationFillModeRule = <
  T = AnimationFillModeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONFILLMODE, getValue: transformer });

export const animationFillMode = createAnimationFillMode();

export const animationFillModeRule = createAnimationFillModeRule();
