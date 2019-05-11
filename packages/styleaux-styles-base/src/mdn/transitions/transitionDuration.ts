import { TransitionDurationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSITIONDURATION = 'transitionDuration';

export interface TransitionDurationProps<T = TransitionDurationProperty> {
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |    Safari     |  Edge  |   IE   |
   * | :-----: | :-----: | :-----------: | :----: | :----: |
   * | **26**  | **16**  | **3.1** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |               |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  [TRANSITIONDURATION]: T;
}

export const createTransitionDuration = <
  T = TransitionDurationProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<TransitionDurationProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<TransitionDurationProps<T>, Theme, Media>({
    cssProp: TRANSITIONDURATION,
    prop: TRANSITIONDURATION,
    key,
    transformValue,
  });

export const createTransitionDurationRule = <
  T = TransitionDurationProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONDURATION, getValue: transformer });

export const transitionDuration = createTransitionDuration();

export const transitionDurationRule = createTransitionDurationRule();
