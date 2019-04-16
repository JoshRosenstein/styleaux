import { CSSObj } from '../cssTypes'
import { mapObj, toArray } from '@roseys/futils'
import { isFunction, isPlainObject, isNil, isNumeric, isArray } from 'typed-is'
import { PropStyleFunc, PropStyleFuncArr, OmitTheme, CreateStylesValueGetter, WithTheme ,ExtractPrimitive} from './types'
import { DEFAULT_MEDIA_KEY } from '../constants'
import { getMedia, getThemeMedia, getDefaultMedia } from '../getters/index'
import { createWarnOnce, ensureMQ } from '../utils'

const warnOnce = createWarnOnce('createStyle')

export enum CreateStyleKeys {
  arg1 = 'style',
  arg2 = 'staticOrStyleFunc',
}



type StyleInputValueFunction = CreateStylesValueGetter<any, any>

type StyleInputValue =
  | CSSObj
  | StyleInputValueFunction
  | StyleInputValueFunction[]

// type CreateStyleMapValueTypeFunc<T, P> = ((
//   input: Extract<T, boolean | string | number>,
// ) => CSSObj) | ((
//   input: Extract<T, boolean | string | number>,
//   props: P
// ) => CSSObj) |
//   ((
//     input: Extract<T, boolean | string | number>,
//     props: P,
//     mediaKey: MediaKey,
//   ) => CSSObj)



type MaybeArr<T> = T | T[]

type StyleInputValueP<T, P> =
  | CSSObj
  | MaybeArr<CreateStylesValueGetter<T, P>>


type StyleInput = { [propKey: string]: StyleInputValue | undefined }

type StyleInputFromProps<P> = OmitTheme<{ [K in keyof P]?: StyleInputValueP<NonNullable<ExtractPrimitive<P[K]>>, P> }>

type Values<T extends object> = T[keyof T]

export interface CreateStyles<
  PROPS extends {} = any,
  S extends StyleInput = StyleInputFromProps<PROPS>,
  A2 = CSSObj | PropStyleFunc<PROPS> | PropStyleFuncArr<PROPS>
  > {
  (styles: S, staticOrStyleFunc?: A2): PropStyleFuncArr<PROPS>

  [CreateStyleKeys.arg1]: S
  [CreateStyleKeys.arg2]: A2
}

/**
 * Utility to cast all props as responsive
 */
export interface CreateStylesResponsive<
  PROPS extends {} = any,
  Theme extends {} = never,
  Media extends {} = never,
  P = WithTheme<PROPS, Theme, Media>,
  S = StyleInputFromProps<P>,

  A2 = CSSObj | PropStyleFunc<P> | PropStyleFuncArr<P>
  > {
  (styles: S, staticOrStyleFunc?: A2): PropStyleFuncArr<P>

  [CreateStyleKeys.arg1]: S
  [CreateStyleKeys.arg2]: A2
}

/**
 * Create styles from {@link Object} with keys that represents component `prop` and
 * the value is a `style` that will be applied in the order it was passed.
 * @remarks
 * staticOrStyleFunc- is treated as initial style. (may change)
 *
 * ```js
 * { [prop]: style | (input, props, mediaKey) => style }
 * ```
 *
 * @param styles - {propName:( style | (input,props,key)=>style)}
 * @param [staticOrStyleFunc] - Optional param to pass in static styles or custom single arg(props) function
 *
 * @example
 *
 *  const style=createStyles({
  *    display: rule('display')
  *  }))
  *
 */

export function createStyles<
  PROPS extends {} = any,
  >(
    styles: StyleInputFromProps<PROPS>,
    staticOrStyleFunc?: CSSObj | PropStyleFunc<PROPS> | PropStyleFuncArr<PROPS>,
): PropStyleFuncArr<PROPS> {
  function getStyles(props: PROPS): CSSObj[] {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefaultMedia(props)
    const mediaKeys = Object.keys(media)
    let initial = isNil(staticOrStyleFunc)
      ? []
      : isFunction(staticOrStyleFunc)
        ? toArray(staticOrStyleFunc(props))
        : (toArray(staticOrStyleFunc))

    function mapStyles(input: unknown, style: Values<typeof styles>, mediaKey?: string) {
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
      }

      const query = getMedia(mKey || defaultMediaKey, media)

      if (hasMediaKey && !query) {
        warnOnce('Could not find mediaKey: ' + mediaKey)
        return undefined
      }
      // general prop style
      const sty = handleStyle(style, input, props, mKey)

      return query ? { [ensureMQ(query)]: sty } : sty
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
    [CreateStyleKeys.arg1]: styles,
    [CreateStyleKeys.arg2]: staticOrStyleFunc,
  })
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
