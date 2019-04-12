import { IsolationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ISOLATION='isolation'

export interface IsolationProps<T=IsolationProperty> {
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  [ISOLATION]: T;
}

export const createIsolation = <
  T = IsolationProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<IsolationProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<IsolationProps<T>,Theme,Media>({
    cssProp:ISOLATION,
    prop:ISOLATION,
    key,
    transformValue,
  })

export const createIsolationRule = <T = IsolationProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ISOLATION, getValue: transformer})

export const isolation =createIsolation()

export const isolationRule =createIsolationRule()
