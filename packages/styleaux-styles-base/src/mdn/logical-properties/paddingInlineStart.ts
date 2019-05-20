import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PaddingInlineStartProperty } from '@styleaux/csstype';

const PADDINGINLINESTART = 'paddingInlineStart';

export interface PaddingInlineStartProps<T = PaddingInlineStartProperty> {
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           |  No  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  [PADDINGINLINESTART]: T;
}

export const createPaddingInlineStart = <
  T = PaddingInlineStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingInlineStartProps<T>, Theme> = {},
) =>
  style<PaddingInlineStartProps<T>, Theme, Media>({
    cssProp: PADDINGINLINESTART,
    prop: PADDINGINLINESTART,
    ...config,
  });

export const createPaddingInlineStartRule = <
  T = PaddingInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGINLINESTART, getValue: transformer });

export const paddingInlineStart = createPaddingInlineStart();

export const paddingInlineStartRule = createPaddingInlineStartRule();
