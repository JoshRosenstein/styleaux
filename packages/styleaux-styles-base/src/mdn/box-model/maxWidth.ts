import { MaxWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MAXWIDTH = 'maxWidth';

export interface MaxWidthProps<T = MaxWidthProperty> {
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  [MAXWIDTH]: T;
}

export const createMaxWidth = <
  T = MaxWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<MaxWidthProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<MaxWidthProps<T>, Theme, Media>({
    cssProp: MAXWIDTH,
    prop: MAXWIDTH,
    key,
    transformValue,
  });

export const createMaxWidthRule = <T = MaxWidthProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MAXWIDTH, getValue: transformer });

export const maxWidth = createMaxWidth();

export const maxWidthRule = createMaxWidthRule();
