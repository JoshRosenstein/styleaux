import { ContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const CONTENT = 'content';

export interface ContentProps<T = ContentProperty> {
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  [CONTENT]: T;
}

export const createContent = <
  T = ContentProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ContentProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ContentProps<T>, Theme, Media>({
    cssProp: CONTENT,
    prop: CONTENT,
    key,
    transform,
  });

export const createContentRule = <T = ContentProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CONTENT, getValue: transformer });

export const content = createContent();

export const contentRule = createContentRule();
