import {path} from '@roseys/futils'

import {getThemeMedia} from './getThemeMedia'

export const getMedia = (input, media?: {}) =>
  media ? path(input, media) : props => path(input, getThemeMedia(props))
