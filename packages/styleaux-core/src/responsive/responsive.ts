import {isResponsiveType} from '../utils'
import {isTruthy, isString} from 'typed-is'
import {responsiveReducer} from './responsiveHelpers'
import { IStyles} from '../types'
import {IResponsiveOptions} from './types'
import {IDictionary, AnyFunction} from '../types.utils'

const BASE_EMPTY_OBJECT = {}
const BASE_EMPTY_INDEXED_OBJECT: IDictionary<any> = BASE_EMPTY_OBJECT

export const creatResponsiveOptions = ({
  defaultBreakPoints = BASE_EMPTY_INDEXED_OBJECT,
}) => ({
  defaultBreakPoints,
})

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
}

export interface ICreateResponsive<DB extends {} = never> {
  toMq: AnyFunction
  defaultBreakPoints: DB
  transformStyle: (x: any) => any
}

// export interface IResponsiveOptions<
//   B extends {} = never,
//   DB extends {} = never
// > {
//   value?: any
//   defaultValue?: any
//   cssProp: CssProp
//   transformer?: (x: any) => any
//   breakpoints?: B | DB
// }

export const createResponsive = <DB extends {} = never>(
  toMq: AnyFunction,
  defaultBreakPoints: DB,
  transformStyle = (x: any) => x,
) => {
  return function responsive<B extends {} = DB>({
    value,
    defaultValue,
    cssProp,
    transformer = transformStyle,
    breakpoints = defaultBreakPoints,
  }: IResponsiveOptions<B | DB>): IStyles | undefined {
    // / run default Value thru transformer ??
    const CssPropAsString = isString(cssProp) && cssProp

    const defaultResult = defaultValue
      ? CssPropAsString
        ? {[CssPropAsString]: defaultValue}
        : defaultValue
      : {}

    // / if its not responsive value type, return
    if (!isResponsiveType(value)) {
      return !isTruthy(value)
        ? defaultResult
        : CssPropAsString
        ? {[CssPropAsString]: transformer(value)}
        : transformer(value)
    }

    return responsiveReducer(
      value,
      breakpoints,
      CssPropAsString,
      transformer,
      toMq,
      defaultResult,
    )
  }
}

export default createResponsive
