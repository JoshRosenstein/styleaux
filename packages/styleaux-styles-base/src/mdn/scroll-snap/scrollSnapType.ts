import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollSnapTypeProperty } from '@styleaux/csstype';

const SCROLLSNAPTYPE = 'scrollSnapType';

export interface ScrollSnapTypeProps<T = ScrollSnapTypeProperty> {
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |     Edge     |      IE      |
   * | :----: | :-----: | :-----: | :----------: | :----------: |
   * | **69** | **39**  | **11**  | **12** _-x-_ | **10** _-x-_ |
   * |        |         | 9 _-x-_ |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  [SCROLLSNAPTYPE]: T;
}

export const createScrollSnapType = <
  T = ScrollSnapTypeProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollSnapTypeProps<T>, Theme> = {},
) =>
  style<ScrollSnapTypeProps<T>, Theme, Media>({
    cssProp: SCROLLSNAPTYPE,
    prop: SCROLLSNAPTYPE,
    ...config,
  });

export const createScrollSnapTypeRule = <
  T = ScrollSnapTypeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLSNAPTYPE, getValue: transformer });

export const scrollSnapType = createScrollSnapType();

export const scrollSnapTypeRule = createScrollSnapTypeRule();
