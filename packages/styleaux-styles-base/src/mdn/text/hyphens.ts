import { HyphensProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const HYPHENS = 'hyphens';

export interface HyphensProps<T = HyphensProperty> {
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     |     Edge     |      IE      |
   * | :------: | :-----: | :-----------: | :----------: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  [HYPHENS]: T;
}

export const createHyphens = <
  T = HyphensProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<HyphensProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<HyphensProps<T>, Theme, Media>({
    cssProp: HYPHENS,
    prop: HYPHENS,
    key,
    transform,
  });

export const createHyphensRule = <T = HyphensProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: HYPHENS, getValue: transformer });

export const hyphens = createHyphens();

export const hyphensRule = createHyphensRule();
