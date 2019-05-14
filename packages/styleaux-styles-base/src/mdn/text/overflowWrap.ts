import { OverflowWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOWWRAP = 'overflowWrap';

export interface OverflowWrapProps<T = OverflowWrapProperty> {
  /**
   * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  [OVERFLOWWRAP]: T;
}

export const createOverflowWrap = <
  T = OverflowWrapProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OverflowWrapProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OverflowWrapProps<T>, Theme, Media>({
    cssProp: OVERFLOWWRAP,
    prop: OVERFLOWWRAP,
    key,
    transform,
  });

export const createOverflowWrapRule = <T = OverflowWrapProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOWWRAP, getValue: transformer });

export const overflowWrap = createOverflowWrap();

export const overflowWrapRule = createOverflowWrapRule();
