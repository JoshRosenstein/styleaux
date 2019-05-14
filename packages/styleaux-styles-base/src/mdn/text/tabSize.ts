import { TabSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TABSIZE = 'tabSize';

export interface TabSizeProps<T = TabSizeProperty> {
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  [TABSIZE]: T;
}

export const createTabSize = <
  T = TabSizeProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TabSizeProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TabSizeProps<T>, Theme, Media>({
    cssProp: TABSIZE,
    prop: TABSIZE,
    key,
    transform,
  });

export const createTabSizeRule = <T = TabSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TABSIZE, getValue: transformer });

export const tabSize = createTabSize();

export const tabSizeRule = createTabSizeRule();
