import {path} from '@roseys/futils'
import {
  isString,
  isNumber,
  isDefined,
  isFunction,
  isTruthy,
  isNil,
} from 'typed-is'
import {
  flow,
  when,
  ifElse,
  pipe,
  objOf,
  whenFunctionCallWith,
  prop,
} from '@roseys/futils'
import {MaybeAnyDict, Maybe} from '@styleaux/helper-plugin-utils'
//  "javascript.validate.enable": false,
import {OPTIONSKEYS} from './constants'

export type Options = {
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
  defaultTheme: {},
  [OPTIONSKEYS.defaultLookup]: false,
  [OPTIONSKEYS.defaultTransform]: false,
}
//string | Array<string | number>
type getThemeT<T> = (
  themeProp: T,
  props?: MaybeAnyDict,
) => Maybe<string | number>

type inputType = Maybe<string | number>
type transformFuncs = (
  value: string | number,
  props?: MaybeAnyDict,
) => Maybe<string | number>

// type transformFuncs = {
//   (value: string): any
//   (value: number): any

//   (value: string, props?: MaybeAnyDict): any
//   (value: number, props?: MaybeAnyDict): any
//   (value: string | number, props?: MaybeAnyDict): Maybe<string | number>
// }

type transformStyleConfig = {
  value: inputType
  cssProp?: string
  valueOnly?: boolean
  lookUpfn?: getThemeT<any>
  path?: string
  postFn?: transformFuncs
  preFn?: transformFuncs
  props?: MaybeAnyDict
  defaultTransform?: boolean
  defaultLookup?: boolean
  [index: string]: any
}
const isNeg = (v: string | number) => (isString(v) ? /^-.+/.test(v) : v < 0)

const stripNeg = (v: string | number) =>
  isString(v) ? v.slice(1) : Math.abs(v)
const toNeg = (v: string | number) => (isNumber(v) ? v * -1 : `-${v}`)
type $keys<T> = keyof T
export const createTransformStyle = <T>(
  themeGetter: getThemeT<T>,
  initOptions: Options = {},
) => {
  let {
    [OPTIONSKEYS.keys]: keys = {},
    [OPTIONSKEYS.getter]: getter = {},
    [OPTIONSKEYS.functions]: functions = {},
    [OPTIONSKEYS.defaultLookup]: defaultLookup,
    [OPTIONSKEYS.defaultTransform]: defaultTransform,
  } = initOptions || {}

  let defaultLookups = {
    keys,
    getter,
    functions,
    defaultLookup,
    defaultTransform,
  }
  let globalOptions = {defaultLookup, defaultTransform}

  return function transformStyle({
    value,
    cssProp,
    valueOnly,
    lookUpfn = themeGetter,
    path,
    postFn,
    preFn,
    props,
    ...localOptions
  }: {
    value: inputType
    cssProp?: string
    valueOnly?: boolean
    lookUpfn?: getThemeT<any>
    path?: string
    postFn?: transformFuncs | $keys<typeof functions>
    preFn?: transformFuncs
    props?: MaybeAnyDict
    defaultTransform?: boolean
    defaultLookup?: boolean
    [index: string]: any
  }) {
    const options = {...globalOptions, ...localOptions}
    let {
      defaultLookup: doDefaultLookup,
      defaultTransform: doDefaultTransform,
    } = options
    const hasCssProp = isDefined(cssProp)
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
export type TransformStyle = ReturnType<typeof createTransformStyle>

// const {
//   pxTo,
//   pxToEm,
//   pxToRem,
//   pxToRel,
//   normalize,
//   normalizeEm,
//   normalizeRem,
// } = createPxToPresents()
