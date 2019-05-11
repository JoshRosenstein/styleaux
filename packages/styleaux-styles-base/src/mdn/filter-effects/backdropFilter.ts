import { BackdropFilterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKDROPFILTER = 'backdropFilter';

export interface BackdropFilterProps<T = BackdropFilterProperty> {
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * |  n/a   |   No    | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  [BACKDROPFILTER]: T;
}

export const createBackdropFilter = <
  T = BackdropFilterProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BackdropFilterProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BackdropFilterProps<T>, Theme, Media>({
    cssProp: BACKDROPFILTER,
    prop: BACKDROPFILTER,
    key,
    transformValue,
  });

export const createBackdropFilterRule = <
  T = BackdropFilterProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKDROPFILTER, getValue: transformer });

export const backdropFilter = createBackdropFilter();

export const backdropFilterRule = createBackdropFilterRule();
