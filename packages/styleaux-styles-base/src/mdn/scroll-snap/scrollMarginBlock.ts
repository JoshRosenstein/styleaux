import { ScrollMarginBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINBLOCK = 'scrollMarginBlock';

export interface ScrollMarginBlockProps<T = ScrollMarginBlockProperty> {
  /**
   * The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  [SCROLLMARGINBLOCK]: T;
}

export const createScrollMarginBlock = <
  T = ScrollMarginBlockProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ScrollMarginBlockProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ScrollMarginBlockProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINBLOCK,
    prop: SCROLLMARGINBLOCK,
    key,
    transform,
  });

export const createScrollMarginBlockRule = <
  T = ScrollMarginBlockProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINBLOCK, getValue: transformer });

export const scrollMarginBlock = createScrollMarginBlock();

export const scrollMarginBlockRule = createScrollMarginBlockRule();
