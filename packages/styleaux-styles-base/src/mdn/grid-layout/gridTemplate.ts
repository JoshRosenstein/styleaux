import { Config } from '../../types';
import { GridTemplateProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const GRIDTEMPLATE = 'gridTemplate';

export interface GridTemplateProps<T = GridTemplateProperty> {
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  [GRIDTEMPLATE]: T;
}

export const createGridTemplate = <
  T = GridTemplateProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridTemplateProps<T>, Theme> = {},
) =>
  style<GridTemplateProps<T>, Theme, Media>({
    cssProp: GRIDTEMPLATE,
    prop: GRIDTEMPLATE,
    ...config,
  });

export const createGridTemplateRule = <T = GridTemplateProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDTEMPLATE, getValue: transformer });

export const gridTemplate = createGridTemplate();

export const gridTemplateRule = createGridTemplateRule();
