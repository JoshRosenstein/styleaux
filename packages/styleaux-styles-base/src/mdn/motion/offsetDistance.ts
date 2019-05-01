import { OffsetDistanceProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OFFSETDISTANCE='offsetDistance'

export interface OffsetDistanceProps<T=OffsetDistanceProperty> {
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  [OFFSETDISTANCE]: T;
}

export const createOffsetDistance = <
  T = OffsetDistanceProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OffsetDistanceProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OffsetDistanceProps<T>,Theme,Media>({
    cssProp:OFFSETDISTANCE,
    prop:OFFSETDISTANCE,
    key,
    transformValue,
  })

export const createOffsetDistanceRule = <T = OffsetDistanceProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: OFFSETDISTANCE, getValue: transformer})

export const offsetDistance =createOffsetDistance()

export const offsetDistanceRule =createOffsetDistanceRule()
