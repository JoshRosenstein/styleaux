import { Config } from '../../types';
import { WritingModeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const WRITINGMODE = 'writingMode';

export interface WritingModeProps<T = WritingModeProperty> {
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * **Initial value**: `horizontal-tb`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  |     IE      |
   * | :---------: | :-----: | :-----------: | :----: | :---------: |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  [WRITINGMODE]: T;
}

export const createWritingMode = <
  T = WritingModeProperty,
  Media = never,
  Theme = never
>(
  config: Config<WritingModeProps<T>, Theme> = {},
) =>
  style<WritingModeProps<T>, Theme, Media>({
    cssProp: WRITINGMODE,
    prop: WRITINGMODE,
    ...config,
  });

export const createWritingModeRule = <T = WritingModeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WRITINGMODE, getValue: transformer });

export const writingMode = createWritingMode();

export const writingModeRule = createWritingModeRule();
