import { BackgroundAttachmentProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDATTACHMENT='backgroundAttachment'

export interface IBackgroundAttachmentProps<T> {
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment: T;
}

export const backgroundAttachment = <
  T = BackgroundAttachmentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundAttachmentProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDATTACHMENT,
    prop: BACKGROUNDATTACHMENT,
    alias,
    key,
    transformValue,
  })

export const backgroundAttachmentRule = <T = BackgroundAttachmentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDATTACHMENT, getValue: transformer})
