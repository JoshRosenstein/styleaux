import { TransitionPropertyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSITIONPROPERTY = 'transitionProperty';

export interface TransitionPropertyProps<T = TransitionPropertyProperty> {
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  [TRANSITIONPROPERTY]: T;
}

export const createTransitionProperty = <
  T = TransitionPropertyProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<TransitionPropertyProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<TransitionPropertyProps<T>, Theme, Media>({
    cssProp: TRANSITIONPROPERTY,
    prop: TRANSITIONPROPERTY,
    key,
    transform,
  });

export const createTransitionPropertyRule = <
  T = TransitionPropertyProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONPROPERTY, getValue: transformer });

export const transitionProperty = createTransitionProperty();

export const transitionPropertyRule = createTransitionPropertyRule();
