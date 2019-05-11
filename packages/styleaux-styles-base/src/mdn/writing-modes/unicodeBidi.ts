import { UnicodeBidiProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const UNICODEBIDI = 'unicodeBidi';

export interface UnicodeBidiProps<T = UnicodeBidiProperty> {
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  [UNICODEBIDI]: T;
}

export const createUnicodeBidi = <
  T = UnicodeBidiProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<UnicodeBidiProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<UnicodeBidiProps<T>, Theme, Media>({
    cssProp: UNICODEBIDI,
    prop: UNICODEBIDI,
    key,
    transformValue,
  });

export const createUnicodeBidiRule = <T = UnicodeBidiProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: UNICODEBIDI, getValue: transformer });

export const unicodeBidi = createUnicodeBidi();

export const unicodeBidiRule = createUnicodeBidiRule();
