import {path} from '@roseys/futils'
import {
  isString,
  isNumber,
  isDefined,
  isFunction,
  isTruthy,
  isNil,
} from 'typed-is'
import {MaybeAnyDict, Maybe} from '../types'
import {isNeg, stripNeg, toNeg} from './utils'

//  "javascript.validate.enable": false,
import {OPTIONSKEYS} from './constants'

export interface IGlobalOptions {
  [index: string]: any
  [OPTIONSKEYS.keys]?: {[cssProp: string]: string}
  [OPTIONSKEYS.getter]?: {[cssProp: string]: string}
  [OPTIONSKEYS.functions]?: {
    [transformFuncs: string]: ((value: string | number, props?: any) => any)
  }
  [OPTIONSKEYS.defaultLookup]?: boolean
  [OPTIONSKEYS.defaultTransform]?: boolean
}

export const defaultOptions = {
  [OPTIONSKEYS.defaultLookup]: false,
  [OPTIONSKEYS.defaultTransform]: false,
}
//string | Array<string | number>
type getThemeT<T> = (
  themeProp: T,
  props?: MaybeAnyDict,
) => Maybe<string | number>

type inputType = Maybe<string | number>

export interface ITransformFns {
  (value: string, props?: MaybeAnyDict): any
  (value: number, props?: MaybeAnyDict): any
  (value: string | number, props?: MaybeAnyDict): any
}

export interface ILocalOptions<P> {
  lookUpfn?: Function
  path?: string
  postFn?: any
  preFn?: any
  props?: P
  defaultTransform?: boolean
  defaultLookup?: boolean
  //key?: string /// OLD
  //path?: string
  // getter?: transformFuncs /// OLD
  // postFn?: transformFuncs
  //preFn?: transformFuncs
}

export interface IInput<P> extends ILocalOptions<P> {
  value: string | number
  cssProp?: string
  valueOnly?: boolean
}

export const createTransformStyle = <T>(
  themeGetter: Function,
  initOptions: IGlobalOptions = {},
) => {
  let {
    [OPTIONSKEYS.keys]: keys = {},
    [OPTIONSKEYS.getter]: getter = {},
    [OPTIONSKEYS.functions]: functions = {},
    [OPTIONSKEYS.defaultLookup]: defaultLookup = undefined,
    [OPTIONSKEYS.defaultTransform]: defaultTransform = undefined,
  } = initOptions || {}

  let defaultLookups = {
    keys,
    getter,
    functions,
    defaultLookup,
    defaultTransform,
  }
  let globalOptions = {defaultLookup, defaultTransform}

  return function transformStyle<P extends {}>(
    {
      value,
      cssProp,
      valueOnly,
      lookUpfn = themeGetter,
      path,
      postFn,
      preFn,
      props,
      ...localOptions
    }: IInput<P>, // }: { //   value: string | number //   cssProp?: string //   valueOnly?: boolean //   lookUpfn?: getThemeT<any> //   path?: string //   postFn?: ITransformFns | keyof typeof functions //   preFn?: ITransformFns | keyof typeof functions //   props?: {} //   defaultTransform?: boolean //   defaultLookup?: boolean //   [index: string]: any // })
  ) {
    const options = {...globalOptions, ...localOptions}
    let {
      defaultLookup: doDefaultLookup,
      defaultTransform: doDefaultTransform,
    } = options

    let defaultLookup: string | undefined
    let defaultGetter: string | undefined

    if (isNil(cssProp)) {
      if (isNil(value)) {
        return value
      }
      doDefaultLookup = false
      doDefaultTransform = false
      valueOnly = true
    } else {
      if (isNil(value)) {
        return {[cssProp]: value}
      }
      if (doDefaultLookup) {
        defaultLookup = defaultLookups.keys[cssProp]
      }
      if (doDefaultTransform) {
        defaultGetter = defaultLookups.getter[cssProp]
      }
    }

    const themeKey = path || defaultLookup
    let getter = postFn || defaultGetter

    const getThemeOr = v => lookUpfn([themeKey, v], props) || v

    const hasGetter = isTruthy(getter)

    let ret = value
    if (isFunction(preFn)) value = preFn(value, props)

    if (isDefined(value) && isDefined(themeKey)) {
      if (isNeg(value)) {
        value = toNeg(getThemeOr(stripNeg(value)))
      } else {
        value = getThemeOr(value)
      }
    }

    if (isDefined(value) && isDefined(getter)) {
      if (isString(getter)) {
        getter = defaultLookups.functions[getter]
      }
      if (isFunction(getter)) {
        value = getter(value, props)
      }
    }

    return isNil(cssProp) || valueOnly ? value : {[cssProp]: value} //callGetter(checkAndCallgetTheme(checkAndCallPreFn(value)))
  }
}
export type ITransformStyle = ReturnType<typeof createTransformStyle>

// const {
//   pxTo,
//   pxToEm,
//   pxToRem,
//   pxToRel,
//   normalize,
//   normalizeEm,
//   normalizeRem,
// } = createPxToPresents()
