import { BorderBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCK = 'borderBlock';

export interface BorderBlockProps<T = BorderBlockProperty> {
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  [BORDERBLOCK]: T;
}

export const createBorderBlock = <
  T = BorderBlockProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderBlockProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderBlockProps<T>, Theme, Media>({
    cssProp: BORDERBLOCK,
    prop: BORDERBLOCK,
    key,
    transform,
  });

export const createBorderBlockRule = <T = BorderBlockProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCK, getValue: transformer });

export const borderBlock = createBorderBlock();

export const borderBlockRule = createBorderBlockRule();
