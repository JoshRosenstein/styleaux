import { ColorProperty, BackgroundColorProperty } from '@styleaux/csstype';

import {
  style,
  StyleOptions,
  styler,
  StylerOptions,
  combineStyles,
} from '../../';

const COLOR = 'color' as 'color';
export { ColorProperty };
export interface ColorProps<T = ColorProperty> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  [COLOR]: T;
}

export const createTextColor = <
  T = ColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<ColorProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<ColorProps<T>, Theme, Media>({
    cssProp: COLOR,
    prop: COLOR,
    key,
    transformValue,
  });

export const createTextColorRule = <T = ColorProperty, P = unknown>(
  transformer?: StylerOptions<P, T>['getValue'],
) => styler<T, P>({ cssProp: COLOR, getValue: transformer });

export const textColor = createTextColor({ key: 'colors' });

export const textColorRule = createTextColorRule();

export const createBackgroundColor = <Colors, Theme, Media>(
  themeKey = 'colors',
) =>
  style<
    {
      bg?: Colors | BackgroundColorProperty;
      backgroundColor?: Colors | BackgroundColorProperty;
    },
    Theme,
    Media
  >({
    cssProp: 'backgroundColor',
    prop: ['backgroundColor', 'bg'],
    key: themeKey,
  });

export const backgroundColor = style<{
  bg?: BackgroundColorProperty;
  backgroundColor?: BackgroundColorProperty;
}>({
  cssProp: 'backgroundColor',
  prop: ['backgroundColor', 'bg'],
  key: 'colors',
});

type ThemeColor<T, K> = K extends keyof T
  ? keyof T[K] | ColorProperty
  : ColorProperty;

export const createColor = <
  Theme extends Record<string, any> = never,
  Media = never,
  ColorKey extends keyof Theme = 'colors'
>(
  themeKey = 'colors' as any,
) =>
  combineStyles(
    createTextColor<ThemeColor<Theme, ColorKey>, Media, Theme>({
      key: themeKey,
    }),
    createBackgroundColor<ThemeColor<Theme, ColorKey>, Theme, Media>(themeKey),
  );
