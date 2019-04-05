import { BorderSpacingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERSPACING='borderSpacing'

export interface IBorderSpacingProps<T> {
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing: T;
}

export const createBorderSpacing = <
  T = BorderSpacingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderSpacingProps<T>, Theme, Breakpoints>({
    cssProp: BORDERSPACING,
    prop: BORDERSPACING,
    alias,
    key,
    transformValue,
  })

export const createBorderSpacingRule = <T = BorderSpacingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERSPACING, getValue: transformer})

export const borderSpacing =createBorderSpacing()

export const borderSpacingRule =createBorderSpacingRule()
