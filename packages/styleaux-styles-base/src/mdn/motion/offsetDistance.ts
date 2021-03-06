import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { OffsetDistanceProperty } from '@styleaux/csstype';

const OFFSETDISTANCE = 'offsetDistance';

export interface OffsetDistanceProps<T = OffsetDistanceProperty> {
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   No    |   No   |  No  | No  |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  [OFFSETDISTANCE]: T;
}

export const createOffsetDistance = <
  T = OffsetDistanceProperty,
  Media = never,
  Theme = never
>(
  config: Config<OffsetDistanceProps<T>, Theme> = {},
) =>
  style<OffsetDistanceProps<T>, Theme, Media>({
    cssProp: OFFSETDISTANCE,
    prop: OFFSETDISTANCE,
    ...config,
  });

export const createOffsetDistanceRule = <
  T = OffsetDistanceProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OFFSETDISTANCE, getValue: transformer });

export const offsetDistance = createOffsetDistance();

export const offsetDistanceRule = createOffsetDistanceRule();
