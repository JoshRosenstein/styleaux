import {WithTheme, EtractNonResponsiveInputType, IStyles} from './types'
import {Simplify} from '../types'

import {mapObj, toArray} from '@roseys/futils'
import {isFunction, isPlainObject, isNil} from 'typed-is'

import {
  STYLES_KEY,
  STYLE_PROPS_KEY,
  STATIC_STYLES_KEY,
  DEFAULT_MEDIA_KEY,
} from '../constants'

import {getMedia, getThemeMedia, getDefaultMedia} from '../getters/index'

import {createWarnOnce} from '../utils/warn-once'

const warnOnce = createWarnOnce('createStyle')

function handleStyle(style, input, props, mediaKey) {
  // selector
  if (isFunction(input)) {
    return input(props, value => handleStyle(style, value, props, mediaKey))
  }

  if (isFunction(style)) {
    return style(input, props, mediaKey)
  }

  return input === true ? style : null
}

export type CreateStyleStatics<S> = {
  [STYLES_KEY]: S
  [STYLE_PROPS_KEY]: EtractNonResponsiveInputType<S>
}
export interface CreateStyles<
S extends {},
Media extends {} = never,
Theme extends {} = never,
Props =Simplify<WithTheme<EtractNonResponsiveInputType<S>, Theme, Media>>,
> extends CreateStyleStatics<S> {
  (props: Props,
  ): IStyles[]

}

export function createStyles<
  S extends {},
  Media extends {} = never,
  Theme extends {} = never
>(
  styles: S,
  config?: {defaultTheme?: Theme; queryHandler?: Function},
): CreateStyles<S,Media,Theme>


export function createStyles<S extends {}>(styles: S) {
  const statics = styles[STATIC_STYLES_KEY]
  const init = statics ? [statics] : []

  function getStyles(props) {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefaultMedia(props)

    function mapStyles(input, style, mediaKey?: string ) {
      const hasMediaKey =
        Boolean(mediaKey) &&
        mediaKey !== defaultMediaKey &&
        mediaKey !== DEFAULT_MEDIA_KEY

/// Only object literals can be responsive
      if (isPlainObject(input)) {
        return mapObj(input, (value, key) => mapStyles(value, style, key as string))
      }
      const query = getMedia(
        mediaKey || defaultMediaKey ,
        media,
      )

      if (hasMediaKey && !query) {
        warnOnce('Could not find mediaKey: ' + mediaKey)
        return undefined
      }
      // general prop style
      const sty = handleStyle(style, input, props, mediaKey)

      return query ? {[`@media ${query}`]: sty} : sty
    }


    return Object.keys(styles).reduce(
      (acc, styleKey) =>
        acc.concat(
          isNil(props[styleKey])
            ? []
            : toArray(styles[styleKey]).map(
                style => mapStyles(props[styleKey], style) || [],
              ),
        ),
      init,
    )

  }

  return Object.assign(getStyles, {
    styles,
  })
}
