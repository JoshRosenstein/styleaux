import { OverflowWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOWWRAP='overflowWrap'

export interface OverflowWrapProps<T=OverflowWrapProperty> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  [OVERFLOWWRAP]: T;
}

export const createOverflowWrap = <
  T = OverflowWrapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OverflowWrapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OverflowWrapProps<T>,Theme,Media>({
    cssProp:OVERFLOWWRAP,
    prop:OVERFLOWWRAP,
    key,
    transformValue,
  })

export const createOverflowWrapRule = <T = OverflowWrapProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: OVERFLOWWRAP, getValue: transformer})

export const overflowWrap =createOverflowWrap()

export const overflowWrapRule =createOverflowWrapRule()
