import { OverflowAnchorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOWANCHOR = 'overflowAnchor';

export interface OverflowAnchorProps<T = OverflowAnchorProperty> {
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **56** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  [OVERFLOWANCHOR]: T;
}

export const createOverflowAnchor = <
  T = OverflowAnchorProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OverflowAnchorProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OverflowAnchorProps<T>, Theme, Media>({
    cssProp: OVERFLOWANCHOR,
    prop: OVERFLOWANCHOR,
    key,
    transform,
  });

export const createOverflowAnchorRule = <
  T = OverflowAnchorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOWANCHOR, getValue: transformer });

export const overflowAnchor = createOverflowAnchor();

export const overflowAnchorRule = createOverflowAnchorRule();
