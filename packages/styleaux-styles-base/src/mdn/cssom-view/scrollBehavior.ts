import { ScrollBehaviorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLBEHAVIOR = 'scrollBehavior';

export interface ScrollBehaviorProps<T = ScrollBehaviorProperty> {
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **61** | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  [SCROLLBEHAVIOR]: T;
}

export const createScrollBehavior = <
  T = ScrollBehaviorProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ScrollBehaviorProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ScrollBehaviorProps<T>, Theme, Media>({
    cssProp: SCROLLBEHAVIOR,
    prop: SCROLLBEHAVIOR,
    key,
    transform,
  });

export const createScrollBehaviorRule = <
  T = ScrollBehaviorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLBEHAVIOR, getValue: transformer });

export const scrollBehavior = createScrollBehavior();

export const scrollBehaviorRule = createScrollBehaviorRule();
