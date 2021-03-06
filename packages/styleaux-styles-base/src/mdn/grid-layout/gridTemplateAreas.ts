import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { GridTemplateAreasProperty } from '@styleaux/csstype';

const GRIDTEMPLATEAREAS = 'gridTemplateAreas';

export interface GridTemplateAreasProps<T = GridTemplateAreasProperty> {
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  [GRIDTEMPLATEAREAS]: T;
}

export const createGridTemplateAreas = <
  T = GridTemplateAreasProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridTemplateAreasProps<T>, Theme> = {},
) =>
  style<GridTemplateAreasProps<T>, Theme, Media>({
    cssProp: GRIDTEMPLATEAREAS,
    prop: GRIDTEMPLATEAREAS,
    ...config,
  });

export const createGridTemplateAreasRule = <
  T = GridTemplateAreasProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDTEMPLATEAREAS, getValue: transformer });

export const gridTemplateAreas = createGridTemplateAreas();

export const gridTemplateAreasRule = createGridTemplateAreasRule();
