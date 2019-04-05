import {ObjectInterpolation3} from '../cssTypes2'
import {mapObj, toArray} from '@roseys/futils'
import {isFunction, isPlainObject, isNil, isNumeric, isArray} from 'typed-is'

import {DEFAULT_MEDIA_KEY} from '../constants'

import {getMedia, getThemeMedia, getDefaultMedia} from '../getters/index'

import {createWarnOnce} from '../utils/warn-once'

const warnOnce = createWarnOnce('createStyle')

export enum CreateStyleKeys {
  arg1='style',
  arg2='staticOrStyleFunc'

}
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

type PartialRecord<K extends keyof any, T> = {[P in K]?: T}

type PartialObj<T> = PartialRecord<string,T>

type cssObj = ObjectInterpolation3<undefined>
type StyleInputValueFunction =((...args: any[]) => cssObj)

type StyleInputValue =
  | cssObj
  | StyleInputValueFunction
  | StyleInputValueFunction[]

  type StyleInputValueP<T,P> =
  | cssObj
  | ((input:T,props?:P,mediakey?:string | number,...args: any[]) => cssObj)
  | ((input:T,props?:P,mediakey?:string | number,...args: any[]) => cssObj)[]

type StyleInput = PartialObj<StyleInputValue>



type StyleInputFromProps<P> = {[K in keyof P]?: StyleInputValueP<P[K],P>}

//type GetPP<Style, Props, KP=keyof Props>={ [P in Extract<Style,string>]?: P extends KP? }

//type InterpolationFunc=<P>(props:P)=>cssObj

export type InterpolationFuncArray<P> = (props: P) => cssObj[]

 type Values<T extends object> = T[keyof T];

export interface CreateStyles2<
PROPS extends {},
S extends StyleInput = StyleInputFromProps<PROPS>,
A2=cssObj | StyleInputValueFunction | InterpolationFuncArray<any>
>{
  (
    styles: S,
    staticOrStyleFunc?: A2,
  ): InterpolationFuncArray<PROPS>

  [CreateStyleKeys.arg1]:S,
  [CreateStyleKeys.arg2]:A2,
}

export function createStyles2<
  PROPS extends {},
  S extends StyleInput= StyleInputFromProps<PROPS>
>(
  styles: S,
  staticOrStyleFunc?: cssObj | StyleInputValueFunction  | InterpolationFuncArray<any>,
): InterpolationFuncArray<PROPS> {
  function getStyles(props: PROPS): cssObj[] {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefaultMedia(props)
    const mediaKeys = Object.keys(media)
    let initial = isNil(staticOrStyleFunc)?[]: isFunction(staticOrStyleFunc)?toArray(staticOrStyleFunc(props)):toArray(staticOrStyleFunc) as cssObj[]



    function mapStyles(input:unknown, style:Values<S>, mediaKey?: string) {
      const hasMediaKey =
        Boolean(mediaKey) && mediaKey !== DEFAULT_MEDIA_KEY && mediaKey !== '0'
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
        return input.map((value, key) =>
          mapStyles(value, style, key.toString()),
        )
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
          isNil(styleKey && props[styleKey])
            ? []
            : toArray(styles[styleKey]).map(
                style => mapStyles(props[styleKey], style) || [],
              ),
        ),
      initial,
    )
  }

  return Object.assign(getStyles, {
    [CreateStyleKeys.arg1]:styles,
    [CreateStyleKeys.arg2]:staticOrStyleFunc,
  })
}

