import { PositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const POSITION='position'

export interface IPositionProps<T> {
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position: T;
}

export const createPosition = <
  T = PositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPositionProps<T>, Theme, Breakpoints>({
    cssProp: POSITION,
    prop: POSITION,
    alias,
    key,
    transformValue,
  })

export const createPositionRule = <T = PositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: POSITION, getValue: transformer})

export const position =createPosition()

export const positionRule =createPositionRule()
