import { Config } from '../../types';
import { CaretColorProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const CARETCOLOR = 'caretColor';

export interface CaretColorProps<T = CaretColorProperty> {
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  [CARETCOLOR]: T;
}

export const createCaretColor = <
  T = CaretColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<CaretColorProps<T>, Theme> = {},
) =>
  style<CaretColorProps<T>, Theme, Media>({
    cssProp: CARETCOLOR,
    prop: CARETCOLOR,
    ...config,
  });

export const createCaretColorRule = <T = CaretColorProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CARETCOLOR, getValue: transformer });

export const caretColor = createCaretColor();

export const caretColorRule = createCaretColorRule();
