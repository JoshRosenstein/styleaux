import { ColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,StylerOptions  } from '../../';

const COLOR='color' as 'color'
export {ColorProperty}
export interface ColorProps<T=ColorProperty> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  [COLOR]: T;
}

export const createColor = <
  T =ColorProperty ,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColorProps<T>,Theme,Media>({
    cssProp:COLOR,
    prop:COLOR,
    key,
    transformValue,
  })

export const createColorRule = <T = ColorProperty, P=unknown>(
  transformer?: StylerOptions<P,T>['getValue'],
) => styler<T,P>({cssProp: COLOR, getValue: transformer})

export const color =createColor()

export const colorRule =createColorRule()
