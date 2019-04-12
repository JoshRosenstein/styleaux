import { AlignContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ALIGNCONTENT='alignContent'

export interface AlignContentProps<T=AlignContentProperty> {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  [ALIGNCONTENT]: T;
}

export const createAlignContent = <
  T = AlignContentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AlignContentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AlignContentProps<T>,Theme,Media>({
    cssProp:ALIGNCONTENT,
    prop:ALIGNCONTENT,
    key,
    transformValue,
  })

export const createAlignContentRule = <T = AlignContentProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ALIGNCONTENT, getValue: transformer})

export const alignContent =createAlignContent()

export const alignContentRule =createAlignContentRule()
