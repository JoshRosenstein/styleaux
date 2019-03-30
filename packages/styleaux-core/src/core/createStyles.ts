import {WithTheme, EtractNonResponsiveInputType, IStyles} from './types'

import {mapObj, toArray} from '@roseys/futils'
import {isFunction, isPlainObject, isNil, isNumeric,isArray} from 'typed-is'

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

export interface CreateStyleStatics<S>  {
  [STYLES_KEY]: S
  [STYLE_PROPS_KEY]: EtractNonResponsiveInputType<S>
}
export interface CreateStyleReturn<S,T,M,P> extends CreateStyleStatics<S>  {
  (props: WithTheme<
    [P] extends [never] ? EtractNonResponsiveInputType<S> : P,
    T,
    M
  >): IStyles[]
}
export type IStylesFunc=((...args:any[])=>IStyles)

export type Style= IStyles | IStylesFunc | IStylesFunc[]

export type CreateStylesInput={
  [propName:string]:Style
}
export interface CreateStyles<
  S extends CreateStylesInput,
  Media extends {} = never,
  Theme extends {} = never,
  P extends {} = never
> extends CreateStyleReturn<S,Theme,Media,P> {}

export function createStyles<
  S extends {},
  Media extends {} = never,
  Theme extends {} = never,
  Props extends {} = never
>(
  styles: S,
  config?: {defaultTheme?: Theme; queryHandler?: Function},
): CreateStyles<S, Media, Theme, Props>

export function createStyles<S extends {}>(styles: S) {
  const statics = styles[STATIC_STYLES_KEY]
  const init = statics ? [statics] : []

  function getStyles(props) {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefaultMedia(props)
    const mediaKeys = Object.keys(media)

    function mapStyles(input, style, mediaKey?: string) {
      const hasMediaKey = Boolean(mediaKey) && mediaKey !== DEFAULT_MEDIA_KEY && mediaKey !== '0'
      let mKey = mediaKey

      if (hasMediaKey) {
        if (isNumeric(mediaKey)) {
          mKey = mediaKeys[Number(mediaKey)]
        }
      }

      /// Only object literals can be responsive
      if (isPlainObject(input)) {
        return mapObj(input, (value, key) =>
          mapStyles(value, style, key as string),
        )
      }

      /// Handling responsive Array
      if (isArray(input)) {

        return input.map((value, key)=>mapStyles(value,style,key.toString()))
        // mapObj(input, (value, key) =>
        //   mapStyles(value, style, key as string),
        // )
      }

      const query = getMedia(mKey || defaultMediaKey, media)

      if (hasMediaKey && !query) {

        warnOnce('Could not find mediaKey: ' + mediaKey)
        return undefined
      }
      // general prop style
      const sty = handleStyle(style, input, props, mKey)


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
