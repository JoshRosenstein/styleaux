import { GridTemplateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDTEMPLATE='gridTemplate'

export interface GridTemplateProps<T=GridTemplateProperty> {
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  [GRIDTEMPLATE]: T;
}

export const createGridTemplate = <
  T = GridTemplateProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridTemplateProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridTemplateProps<T>,Theme,Media>({
    cssProp:GRIDTEMPLATE,
    prop:GRIDTEMPLATE,
    key,
    transformValue,
  })

export const createGridTemplateRule = <T = GridTemplateProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: GRIDTEMPLATE, getValue: transformer})

export const gridTemplate =createGridTemplate()

export const gridTemplateRule =createGridTemplateRule()
