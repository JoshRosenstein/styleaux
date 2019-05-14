import * as CSS from '@styleaux/csstype';
import { StringKeys } from 'simplytyped';
import { styler, GetValue } from './styler';
import { createStyles } from './createStyles';
import { identity, toArray } from '@roseys/futils';
import { getThemePathOr, getUnitValue } from '../getters';
import { CSSProp, Props, Keys, PropStyleArrayFunc, WithTheme } from './types';
export interface GetStyleOptions<T extends Record<string, any>> {
  key?: StringKeys<T> | CSS.StringHack;
  transform?: GetValue<unknown, unknown, any>;
  scale?: number[] | string[] | string | number[];
}
export interface StyleOptions<Props, Theme> {
  cssProp?: CSSProp;

  prop: StringKeys<Props> | StringKeys<Props>[];

  alias?: StringKeys<Props>;

  key?: StringKeys<Theme> | CSS.StringHack;

  transform?: GetValue<any, Props, any>;
  scale?: number[] | string[] | string | number[];
}
export interface StyleOptionsAny {
  prop: any;
  cssProp?: any;
  alias?: any;
  key?: any;
  transform?: GetValue<any, any, any>;
  scale?: any[];
}

export const getKey = <P extends Props>(
  props: P,
  keys?: Keys,
): string | null | undefined => keys && keys.find((k) => props[k] != null);

export function styleGetValue<Theme, P extends Props = any, Input = any>({
  key,
  transform = identity as any,
  scale,
}: GetStyleOptions<Theme>): GetValue<Input, P> {
  return (input, props) =>
    key || scale
      ? transform(getUnitValue(input, scale)(getThemePathOr(key, scale)(props)))
      : transform(input);
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

export type StyleFn<
  P extends Props,
  Theme extends {} = never,
  Media extends {} = never
> = (
  config: StyleOptions<P, Theme>,
) => PropStyleArrayFunc<WithTheme<P, Theme, Media>>;

export function style<
  P extends Props,
  Theme extends {} = never,
  Media extends {} = never
>({
  prop,
  cssProp,
  key,
  transform = identity as any,
  alias,
  scale,
}: StyleOptions<P, Theme>): PropStyleArrayFunc<WithTheme<P, Theme, Media>> {
  const property = cssProp || prop;

  const getter = styler({
    cssProp: property,
    getValue: styleGetValue({
      key,
      transform,
      scale,
    }),
  });

  return (props: WithTheme<P, Theme, Media>) => {
    let keys = toArray(prop);
    if (alias) {
      keys.push(alias);
    }
    const propKey = getKey(props, keys);
    if (propKey) {
      return createStyles({ [propKey]: getter } as any)(props);
    }

    return [];
  };
}

export const extendStyle = (a: Partial<StyleOptionsAny>) => <
  P extends Props,
  Theme extends {} = never,
  Media extends {} = never
>(
  b: StyleOptions<P, Theme>,
) => style<P, Theme, Media>({ ...a, ...b });
