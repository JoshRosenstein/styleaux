import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TransitionPropertyProperty } from '@styleaux/csstype';

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
>(
  config: Config<TransitionPropertyProps<T>, Theme> = {},
) =>
  style<TransitionPropertyProps<T>, Theme, Media>({
    cssProp: TRANSITIONPROPERTY,
    prop: TRANSITIONPROPERTY,
    ...config,
  });

export const createTransitionPropertyRule = <
  T = TransitionPropertyProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONPROPERTY, getValue: transformer });

export const transitionProperty = createTransitionProperty();

export const transitionPropertyRule = createTransitionPropertyRule();
