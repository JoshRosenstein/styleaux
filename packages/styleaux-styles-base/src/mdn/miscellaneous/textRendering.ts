import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextRenderingProperty } from '@styleaux/csstype';

const TEXTRENDERING = 'textRendering';

export interface TextRenderingProps<T = TextRenderingProperty> {
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **1**  | **5**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  [TEXTRENDERING]: T;
}

export const createTextRendering = <
  T = TextRenderingProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextRenderingProps<T>, Theme> = {},
) =>
  style<TextRenderingProps<T>, Theme, Media>({
    cssProp: TEXTRENDERING,
    prop: TEXTRENDERING,
    ...config,
  });

export const createTextRenderingRule = <T = TextRenderingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTRENDERING, getValue: transformer });

export const textRendering = createTextRendering();

export const textRenderingRule = createTextRenderingRule();
