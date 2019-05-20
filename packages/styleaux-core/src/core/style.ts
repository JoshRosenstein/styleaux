import { styler, GetValue } from './styler';
import { createStyles } from './createStyles';
import { identity, toArray } from '@roseys/futils';
import { KeyOfOrString, StringKeys, Optional } from '@styleaux/types';
import { CSSProp, Props, PropStyleArrayFunc, WithTheme } from './types';
import { getThemePathOr, getUnitValue, getKey, getThemeKey } from '../getters';
export interface GetStyleOptions<T extends Record<string, any>> {
  key?: KeyOfOrString<T>;
  transform?: GetValue<unknown, unknown, any>;
  scale?: number[] | string[] | string | number[];
}
export interface StyleOptions<Props, Theme> {
  cssProp?: CSSProp;

  prop: StringKeys<Props> | StringKeys<Props>[];

  alias?: StringKeys<Props>;

  key?: KeyOfOrString<Theme> | KeyOfOrString<Theme>[];

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

export const styleRule = (cssProp, key, transform, scale) =>
  styler({
    cssProp,
    getValue: styleGetValue({
      key,
      transform,
      scale,
    }),
  });

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
  return (props: WithTheme<P, Theme, Media>) => {
    let keys = toArray(prop);
    if (alias) {
      keys.push(alias);
    }
    const propKey = getKey(props, keys);
    if (propKey) {
      return createStyles({
        [propKey]: styleRule(
          cssProp || prop,
          getThemeKey(props, toArray(key)),
          transform,
          scale,
        ),
      } as any)(props);
    }

    return [];
  };
}

export const extendStyle = <Defaults extends Partial<StyleOptionsAny>>(
  defaultConfig: Defaults,
) => <P extends Props, Theme extends {} = never, Media extends {} = never>(
  overrides: Optional<
    StyleOptions<P, Theme>,
    Extract<keyof Defaults, keyof StyleOptions<P, Theme>>
  >,
) => style<P, Theme, Media>({ ...defaultConfig, ...overrides } as any);
