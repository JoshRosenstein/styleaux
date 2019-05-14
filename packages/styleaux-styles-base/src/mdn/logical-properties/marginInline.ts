import { MarginInlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGININLINE = 'marginInline';

export interface MarginInlineProps<T = MarginInlineProperty> {
  /**
   * The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  [MARGININLINE]: T;
}

export const createMarginInline = <
  T = MarginInlineProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MarginInlineProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MarginInlineProps<T>, Theme, Media>({
    cssProp: MARGININLINE,
    prop: MARGININLINE,
    key,
    transform,
  });

export const createMarginInlineRule = <T = MarginInlineProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGININLINE, getValue: transformer });

export const marginInline = createMarginInline();

export const marginInlineRule = createMarginInlineRule();
