import * as CSS from '@styleaux/csstype';
import { CSSProp } from './types';
import { identity } from '@roseys/futils';
import { styler, GetValue } from './styler';
import { createStyles } from './createStyles';
import { getThemePathOr, safeGet } from '../getters';
import { StringKeys, PlainObject, GetKey } from 'simplytyped';
export interface GetStyleOptions<T extends Record<string, any>> {
  key?: StringKeys<T> | CSS.StringHack;
  transformValue?: GetValue<unknown, unknown, any>;
  scale?: number[] | string[] | string | number[];
}
export interface StyleOptions<Props, Theme> {
  cssProp?: CSSProp;

  prop: StringKeys<Props>;

  alias?: StringKeys<Props>;

  key?: StringKeys<Theme> | CSS.StringHack;

  transformValue?: GetValue<any, Props, any>;
  scale?: number[] | string[] | string | number[];
}
export interface StyleOptionsAny {
  prop: any;
  cssProp?: any;
  alias?: any;
  key?: any;
  transformValue?: GetValue<any, any, any>;
  scale?: any[];
}

export function styleGetValue<Theme, P extends PlainObject = any, Input = any>({
  key,
  transformValue = identity as any,
  scale,
}: GetStyleOptions<Theme>): GetValue<Input, P> {
  return (input, props) =>
    key || scale
      ? transformValue(safeGet(input, scale)(getThemePathOr(key, scale)(props)))
      : transformValue(input);
}

type GetKeyOrAny<P, K extends string, V = GetKey<P, K>> = V extends never
  ? any
  : V;

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
  P extends PlainObject,
  Theme extends {} = never,
  Media extends {} = never
>({
  prop,
  cssProp,
  key,
  transformValue = identity as any,
  alias,
  scale,
}: StyleOptions<P, Theme>) {
  const property = cssProp || prop;

  const getter = styler<GetKeyOrAny<P, typeof prop>, P>({
    cssProp: property,
    getValue: styleGetValue<Theme, P, GetKeyOrAny<P, typeof prop>>({
      key,
      transformValue,
      scale,
    }),
  });

  const config = { [prop]: getter } as any;
  if (alias) {
    config[alias] = getter;
  }

  return createStyles<P, Theme, Media>(config);
}
