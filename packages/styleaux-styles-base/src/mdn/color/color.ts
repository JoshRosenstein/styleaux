import { Config } from '../../types';
import { ColorProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLOR = 'color';

export interface ColorProps<T = ColorProperty> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  |  Yes   | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  [COLOR]: T;
}

export const createColor = <T = ColorProperty, Media = never, Theme = never>(
  config: Config<ColorProps<T>, Theme> = {},
) =>
  style<ColorProps<T>, Theme, Media>({
    cssProp: COLOR,
    prop: COLOR,
    ...config,
  });

export const createColorRule = <T = ColorProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLOR, getValue: transformer });

export const color = createColor();

export const colorRule = createColorRule();
