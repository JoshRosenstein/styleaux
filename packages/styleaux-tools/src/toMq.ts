import {
  map,
  always,
  equals,
  toPairs,
  join,
  flow,
  T,
  when,
  cond,
  toKebabCase,
} from '@roseys/futils'
import { isString, isNumber, isArray} from 'typed-is'
import {pxToEm} from './units/px-to'

interface toMqInputAsObj  {
  min?: string | number
  max?: string | number
  minW?: string | number
  maxW?: string | number
  minH?: string | number
  maxH?: string | number
  'max-width'?: string | number
  'max-height'?: string | number
  'min-width'?: string | number
  'min-height'?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  handheld?: boolean
  screen?: boolean
  print?: boolean
  all?: boolean,
  scan? :'interlace' | 'progressive'
  gird?:1 | 0
  resolution?:string,
  'aspect-ratio'?: string,
  'aspectRatio'?: string,
  'maxaspectRatio'?: string,
  'max-aspect-ratio'?: string,
  orientation?: 'landscape' | 'portrait',

}
export const nameLookups = {
  min: 'min-width',
  max: 'max-width',
  minW: 'min-width',
  maxW: 'max-width',
  minH: 'min-height',
  maxH: 'max-height',
}

export const isAtRule = (selector: string): boolean =>
  selector.indexOf('@') === 0

  export const isMediaReady = (selector: string): boolean =>
  selector.indexOf('(') === 0

//const replaceShorthandKeys = mapKeys(x => propOr(x, x, nameLookups))
const prefixMedia = (value: string | number) => `@media ${value}`


export  function toMq(
    input: toMqInputAsObj | Array<toMqInputAsObj> | number | string,unitConverter= pxToEm
  ): string  {


    if (isString(input) ) {
      if(isAtRule(input))    return input
      // Handle media theme Prop
      if(isMediaReady(input))    return prefixMedia(input)
    }

    const objParser = (
      obj: toMqInputAsObj ,
    ):string => {
      const fn = ([feature, value]: any[]) => {
        //feature = isString(feature) ? feature : ''
        feature = nameLookups[feature]  || feature
        feature = toKebabCase(feature)
        return flow(
          value,
          when(isNumber, unitConverter),
          cond([
            [equals(true), always(feature)],
            [equals(false), always(`not ${feature}`)],
            [T, (temp: any) => `(${feature}:${temp})`],
          ]),
        )
      }
      /// TODO: fix types
      return flow(obj as {} ,
        toPairs,
        map(fn),
        join(' and '),
      )
    }

    if (isString(input) || isNumber(input)) {
      return prefixMedia(
        objParser({screen: true, minWidth: unitConverter(input)}),
      )
    }

    if (isArray(input)) {
      return prefixMedia(input.map(objParser).join(', '))
    }
    /// Must be object
    return prefixMedia(objParser(input))


  }

