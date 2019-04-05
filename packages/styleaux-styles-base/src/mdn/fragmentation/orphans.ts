import { OrphansProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ORPHANS='orphans'

export interface IOrphansProps<T> {
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans: T;
}

export const createOrphans = <
  T = OrphansProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOrphansProps<T>, Theme, Breakpoints>({
    cssProp: ORPHANS,
    prop: ORPHANS,
    alias,
    key,
    transformValue,
  })

export const createOrphansRule = <T = OrphansProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ORPHANS, getValue: transformer})

export const orphans =createOrphans()

export const orphansRule =createOrphansRule()
