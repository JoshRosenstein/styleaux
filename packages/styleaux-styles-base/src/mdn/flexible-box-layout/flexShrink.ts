import { FlexShrinkProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLEXSHRINK = 'flexShrink';

export interface FlexShrinkProps<T = FlexShrinkProperty> {
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **29**  | **20**  | **8** _-x-_ | **12** | **10** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  [FLEXSHRINK]: T;
}

export const createFlexShrink = <
  T = FlexShrinkProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<FlexShrinkProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<FlexShrinkProps<T>, Theme, Media>({
    cssProp: FLEXSHRINK,
    prop: FLEXSHRINK,
    key,
    transformValue,
  });

export const createFlexShrinkRule = <T = FlexShrinkProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FLEXSHRINK, getValue: transformer });

export const flexShrink = createFlexShrink();

export const flexShrinkRule = createFlexShrinkRule();
