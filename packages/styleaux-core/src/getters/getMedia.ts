import {path} from '@roseys/futils'
import {Dictionary} from '../types'
import {getThemeMedia} from './getThemeMedia'

export const getMedia = (input:string, media?: Dictionary) =>
  media ? path(input, media) : props => path(input, getThemeMedia(props))
