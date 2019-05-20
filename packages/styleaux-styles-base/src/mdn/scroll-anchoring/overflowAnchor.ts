import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { OverflowAnchorProperty } from '@styleaux/csstype';

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
>(
  config: Config<OverflowAnchorProps<T>, Theme> = {},
) =>
  style<OverflowAnchorProps<T>, Theme, Media>({
    cssProp: OVERFLOWANCHOR,
    prop: OVERFLOWANCHOR,
    ...config,
  });

export const createOverflowAnchorRule = <
  T = OverflowAnchorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOWANCHOR, getValue: transformer });

export const overflowAnchor = createOverflowAnchor();

export const overflowAnchorRule = createOverflowAnchorRule();
