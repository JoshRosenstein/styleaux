import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollMarginBlockProperty } from '@styleaux/csstype';

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
>(
  config: Config<ScrollMarginBlockProps<T>, Theme> = {},
) =>
  style<ScrollMarginBlockProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINBLOCK,
    prop: SCROLLMARGINBLOCK,
    ...config,
  });

export const createScrollMarginBlockRule = <
  T = ScrollMarginBlockProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINBLOCK, getValue: transformer });

export const scrollMarginBlock = createScrollMarginBlock();

export const scrollMarginBlockRule = createScrollMarginBlockRule();
