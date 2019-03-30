import { GridTemplateAreasProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDTEMPLATEAREAS='gridTemplateAreas'

export interface IGridTemplateAreasProps<T> {
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas: T;
}

export const gridTemplateAreas = <
  T = GridTemplateAreasProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridTemplateAreasProps<T>, Theme, Breakpoints>({
    cssProp: GRIDTEMPLATEAREAS,
    prop: GRIDTEMPLATEAREAS,
    alias,
    key,
    transformValue,
  })

export const gridTemplateAreasRule = <T = GridTemplateAreasProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDTEMPLATEAREAS, getValue: transformer})
