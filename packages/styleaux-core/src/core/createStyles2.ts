import {ObjectInterpolation3} from '../cssTypes2'
import {mapObj, toArray} from '@roseys/futils'
import {isFunction, isPlainObject, isNil, isNumeric, isArray} from 'typed-is'

import {DEFAULT_MEDIA_KEY} from '../constants'
//import {InferResponsivePropValue} from './types'
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

type CSSObj = ObjectInterpolation3<undefined>
type StyleInputValueFunction =((...args: any[]) => CSSObj)

//type StyleInputPropsFunction<P> =((props: P) => CSSObj)

type StyleInputValue =
  | CSSObj
  | StyleInputValueFunction
  | StyleInputValueFunction[]

  type StyleInputValueP<T,P> =
  | CSSObj
  | ((input:Extract<T,boolean | string | number > ,props?:P,mediakey?:string | number,...args: any[]) => CSSObj)
  | ((input:Extract<T,boolean | string | number > ,props?:P,mediakey?:string | number,...args: any[]) => CSSObj)[]

type StyleInput = PartialObj<StyleInputValue>

//type StyleInputFromPropsCheck<P>= keyof P extends string? StyleInputFromProps<P>:Record<string,StyleInputValue>

type StyleInputFromProps<P> = {[K in keyof P]?: StyleInputValueP<P[K],P>}

//type GetPP<Style, Props, KP=keyof Props>={ [P in Extract<Style,string>]?: P extends KP? }

export type InterpolationFunc<P>=(props:P)=>CSSObj

export type InterpolationFuncArray<P> = (props: P) => CSSObj[]

 type Values<T extends object> = T[keyof T];

export interface CreateStyles2<
PROPS extends {}=any,
S extends StyleInput = StyleInputFromProps<PROPS>,
A2=CSSObj | InterpolationFunc<PROPS>  | InterpolationFuncArray<PROPS>
>{
  (
    styles: S,
    staticOrStyleFunc?: A2,
  ): InterpolationFuncArray<PROPS>

  [CreateStyleKeys.arg1]:S,
  [CreateStyleKeys.arg2]:A2,
}


export function createStyles2<
  PROPS extends {}=any,
  S extends StyleInput= StyleInputFromProps<PROPS>
>(
  styles: S,
  staticOrStyleFunc?: CSSObj | InterpolationFunc<PROPS>  | InterpolationFuncArray<PROPS>,
): InterpolationFuncArray<PROPS> {
  function getStyles(props: PROPS): CSSObj[] {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefaultMedia(props)
    const mediaKeys = Object.keys(media)
    let initial = isNil(staticOrStyleFunc)?[]: isFunction(staticOrStyleFunc)?toArray(staticOrStyleFunc(props)):toArray(staticOrStyleFunc) as CSSObj[]



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

