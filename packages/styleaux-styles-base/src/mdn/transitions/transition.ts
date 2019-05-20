import { Config } from '../../types';
import { TransitionProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const TRANSITION = 'transition';

export interface TransitionProps<T = TransitionProperty> {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |  **6.1**  | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  [TRANSITION]: T;
}

export const createTransition = <
  T = TransitionProperty,
  Media = never,
  Theme = never
>(
  config: Config<TransitionProps<T>, Theme> = {},
) =>
  style<TransitionProps<T>, Theme, Media>({
    cssProp: TRANSITION,
    prop: TRANSITION,
    ...config,
  });

export const createTransitionRule = <T = TransitionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITION, getValue: transformer });

export const transition = createTransition();

export const transitionRule = createTransitionRule();
