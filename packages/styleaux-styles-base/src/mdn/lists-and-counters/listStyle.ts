import { ListStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LISTSTYLE = 'listStyle';

export interface ListStyleProps<T = ListStyleProperty> {
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  [LISTSTYLE]: T;
}

export const createListStyle = <
  T = ListStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ListStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ListStyleProps<T>, Theme, Media>({
    cssProp: LISTSTYLE,
    prop: LISTSTYLE,
    key,
    transform,
  });

export const createListStyleRule = <T = ListStyleProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LISTSTYLE, getValue: transformer });

export const listStyle = createListStyle();

export const listStyleRule = createListStyleRule();
