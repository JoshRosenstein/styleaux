import { Style, CSSObj } from '@styleaux/types';
import {
  CreateStylesValueGetterBoth,
  ExtractPrimitive,
  OmitTheme,
  Props,
  PropStyleFunc,
  PropStyleArrayFunc,
  WithTheme,
} from '../types';

type MaybeArr<T> = T | T[];

type StyleInputValueP<T, P> =
  | Style
  | CSSObj
  | MaybeArr<CreateStylesValueGetterBoth<T, P>>;

// Maybe shouldnt extract all primitives if prop value can be a nested object?
export type StyleInputFromProps<P> = OmitTheme<
  { [K in keyof P]?: StyleInputValueP<NonNullable<ExtractPrimitive<P[K]>>, P> }
>;

export interface CreateStyles<
  PROPS extends Props = Props,
  Theme extends {} = never,
  Media extends {} = never,
  PX = WithTheme<PROPS, Theme, Media>
> {
  (
    styles: StyleInputFromProps<PROPS>,
    staticOrStyleFunc?: StaticOrStyleFunc<PROPS, PX>,
  ): PropStyleArrayFunc<PX>;
}

export type StaticOrStyleFunc<P, PX> =
  | Style
  | CSSObj
  | PropStyleFunc<PX | P>
  | PropStyleArrayFunc<PX | P>;

export interface CreateCreateStyles<
  Theme extends {} = never,
  Media extends {} = never
> {
  <PROPS extends Props = Props, PX = WithTheme<PROPS, Theme, Media>>(
    styles: StyleInputFromProps<PROPS>,
    staticOrStyleFunc?: StaticOrStyleFunc<PROPS, PX>,
  ): PropStyleArrayFunc<PX>;
}
