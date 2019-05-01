import { PositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const POSITION='position'

export interface PositionProps<T=PositionProperty> {
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  [POSITION]: T;
}

export const createPosition = <
  T = PositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PositionProps<T>,Theme,Media>({
    cssProp:POSITION,
    prop:POSITION,
    key,
    transformValue,
  })

export const createPositionRule = <T = PositionProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: POSITION, getValue: transformer})

export const position =createPosition()

export const positionRule =createPositionRule()
