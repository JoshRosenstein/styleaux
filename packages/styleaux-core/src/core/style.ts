import { createStyles } from './createStyles'
import { styler } from './styler'
import { getThemePathOr, safeGet } from '../getters'
import * as CSS from '@styleaux/csstype'
import { identity } from '@roseys/futils'
import { PropStyleFuncArr, WithTheme } from './types'
import { StringKeys, PlainObject, GetKey } from 'simplytyped'

export interface GetStyleOptions<T extends Record<string, any>> {
  key?: StringKeys<T> | CSS.StringHack,
  transformValue?: Function
  scale?: number[] | string[] | string | number[]
}

export interface StyleOptions<
  Props,
  Theme
  > {
  cssProp?: keyof CSS.Properties

  prop: StringKeys<Props>,

  alias?: StringKeys<Props>,

  key?: StringKeys<Theme> | CSS.StringHack,

  transformValue?: Function
  scale?: number[] | string[] | string | number[]
}
export interface StyleOptionsAny {
  prop: any
  cssProp?: any
  alias?: any,
  key?: any
  transformValue?: Function
  scale?: any[]
}

export function getStyle<Theme, P extends PlainObject = any>({
  key,
  transformValue = identity,
  scale,
}: GetStyleOptions<Theme>) {
  return (input: unknown, props: P) =>
    key || scale
      ? transformValue(safeGet(input, scale)(getThemePathOr(key, scale)(props)))
      : transformValue(input)
}

/**
 * Factory method to provide a similar api as styled-system  {@link createStyles}
 * @remarks
 * TODO
 *
 * @param cssProp - CSS property or Selector
 * @param getValue - (input, props, mediaKey) => CSSObj
 * @param [wrapper=identity]  - transformer
 *
 * @example
 *
 *  const style=createStyles({
  *    display: rule('display')
  *  }))
  *
 */
export function style<
  P = PlainObject,
  Theme extends {} = never,
  Media extends {} = never,
  >({ prop, cssProp, key, transformValue = identity, alias, scale }: StyleOptions<P, Theme>): PropStyleFuncArr<WithTheme<P, Theme, Media>> {
  const property = cssProp || prop

  //const getValue=(input, props, mediaKey) => key?getThemeValue(key, transformValue)(input, input, mediaKey)(props):transformValue(input)

  const getter = styler<GetKey<P, typeof prop>, P>({
    cssProp: property,
    getValue: getStyle<Theme, P>({ key, transformValue, scale }),
  })

  const config = { [prop]: getter } as any
  if (alias) {
    config[alias] = getter
  }

  return createStyles<WithTheme<P, Theme, Media>>(config)
}



