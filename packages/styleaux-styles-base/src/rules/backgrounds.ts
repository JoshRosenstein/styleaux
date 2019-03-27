/**
 * Backgrounds
 */
import {rule} from '@styleaux/core'

import {
  StringHack,
  BackgroundAttachmentProperty,
  BackgroundClipProperty,
  BackgroundImageProperty,
  BackgroundOriginProperty,
  BackgroundPositionProperty,
  BackgroundRepeatProperty,
  BackgroundSizeProperty,
  BackgroundProperty,
} from '@roseys/csstype'

export const backgroundRule = rule<BackgroundProperty<StringHack>>('background')
export const backgroundAttachmentRule = rule<BackgroundAttachmentProperty>(
  'backgroundAttachment',
)
export const backgroundClipRule = rule<BackgroundClipProperty>('backgroundClip')
export const backgroundImageRule = rule<BackgroundImageProperty>('backgroundImage')
export const backgroundOriginRule = rule<BackgroundOriginProperty>(
  'backgroundOrigin',
)
export const backgroundPositionRule = rule<BackgroundPositionProperty<0>>(
  'backgroundPosition',
)
export const backgroundRepeatRule = rule<BackgroundRepeatProperty>(
  'backgroundRepeat',
)
export const backgroundSizeRule = rule<BackgroundSizeProperty<number>>(
  'backgroundSize',
)
