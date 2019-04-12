import { BackgroundAttachmentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDATTACHMENT='backgroundAttachment'

export interface BackgroundAttachmentProps<T=BackgroundAttachmentProperty> {
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  [BACKGROUNDATTACHMENT]: T;
}

export const createBackgroundAttachment = <
  T = BackgroundAttachmentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundAttachmentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundAttachmentProps<T>,Theme,Media>({
    cssProp:BACKGROUNDATTACHMENT,
    prop:BACKGROUNDATTACHMENT,
    key,
    transformValue,
  })

export const createBackgroundAttachmentRule = <T = BackgroundAttachmentProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDATTACHMENT, getValue: transformer})

export const backgroundAttachment =createBackgroundAttachment()

export const backgroundAttachmentRule =createBackgroundAttachmentRule()
