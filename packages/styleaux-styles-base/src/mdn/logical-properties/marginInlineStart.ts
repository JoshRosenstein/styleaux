import { MarginInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGININLINESTART = 'marginInlineStart';

export interface MarginInlineStartProps<T = MarginInlineStartProperty> {
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          |  No  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  [MARGININLINESTART]: T;
}

export const createMarginInlineStart = <
  T = MarginInlineStartProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<MarginInlineStartProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<MarginInlineStartProps<T>, Theme, Media>({
    cssProp: MARGININLINESTART,
    prop: MARGININLINESTART,
    key,
    transformValue,
  });

export const createMarginInlineStartRule = <
  T = MarginInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGININLINESTART, getValue: transformer });

export const marginInlineStart = createMarginInlineStart();

export const marginInlineStartRule = createMarginInlineStartRule();
