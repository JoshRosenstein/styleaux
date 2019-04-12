import { ContainProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const CONTAIN='contain'

export interface ContainProps<T=ContainProperty> {
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  [CONTAIN]: T;
}

export const createContain = <
  T = ContainProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ContainProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ContainProps<T>,Theme,Media>({
    cssProp:CONTAIN,
    prop:CONTAIN,
    key,
    transformValue,
  })

export const createContainRule = <T = ContainProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: CONTAIN, getValue: transformer})

export const contain =createContain()

export const containRule =createContainRule()
