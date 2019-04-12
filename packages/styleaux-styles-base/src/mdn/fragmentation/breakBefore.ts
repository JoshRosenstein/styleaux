import { BreakBeforeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BREAKBEFORE='breakBefore'

export interface BreakBeforeProps<T=BreakBeforeProperty> {
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  [BREAKBEFORE]: T;
}

export const createBreakBefore = <
  T = BreakBeforeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BreakBeforeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BreakBeforeProps<T>,Theme,Media>({
    cssProp:BREAKBEFORE,
    prop:BREAKBEFORE,
    key,
    transformValue,
  })

export const createBreakBeforeRule = <T = BreakBeforeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BREAKBEFORE, getValue: transformer})

export const breakBefore =createBreakBefore()

export const breakBeforeRule =createBreakBeforeRule()
