import { mapObj, toArray } from '@roseys/futils';
import { DEFAULT_MEDIA_KEY } from '../constants';
import { createWarnOnce, ensureMQ } from '../utils';
import { Style, StyleResult, Nil } from '@styleaux/types';
import { getDefaultMedia, getMedia, getThemeMedia } from '../getters/index';
import { isArray, isFunction, isNil, isNumeric, isPlainObject } from 'typed-is';
import {
  CreateStylesValueGetterBoth,
  ExtractPrimitive,
  MediaKey,
  OmitTheme,
  Props,
  PropStyleFunction,
  PropStylesFunction,
  WithTheme,
} from './types';

const warnOnce = createWarnOnce('createStyle');

type MaybeArr<T> = T | T[];

type StyleInputValueP<T, P> =
  | Style
  | MaybeArr<CreateStylesValueGetterBoth<T, P>>;

// Maybe shouldnt extract all primitives if prop value can be a nested object?
type StyleInputFromProps<P> = OmitTheme<
  { [K in keyof P]?: StyleInputValueP<NonNullable<ExtractPrimitive<P[K]>>, P> }
>;

export interface CreateStylesNonResponsive<P extends Props = Props> {
  (
    styles: StyleInputFromProps<P>,
    staticOrStyleFunc?: Style | PropStyleFunction<P> | PropStylesFunction<P>,
  ): PropStylesFunction<P>;
}

export interface CreateStyles<
  PROPS extends Props = Props,
  Theme extends {} = never,
  Media extends {} = never,
  PX = WithTheme<PROPS, Theme, Media>
> {
  (
    styles: StyleInputFromProps<PROPS>,
    staticOrStyleFunc?:
      | Style
      | PropStyleFunction<PX | PROPS>
      | PropStylesFunction<PX | PROPS>,
  ): PropStylesFunction<PX>;
}

export interface CreateCreateStyles<
  Theme extends {} = never,
  Media extends {} = never
> {
  <PROPS extends Props = Props, PX = WithTheme<PROPS, Theme, Media>>(
    styles: StyleInputFromProps<PROPS>,
    staticOrStyleFunc?:
      | Style
      | PropStyleFunction<PX | PROPS>
      | PropStylesFunction<PX | PROPS>,
  ): PropStylesFunction<PX>;
}

function handleStyleReturn(
  query: string | number | Nil,
  style: Style | Nil,
  mediaKey: string | false,
): Style | Nil {
  if (mediaKey && !query) {
    warnOnce('Could not find mediaKey: ' + mediaKey);
    return null;
  }

  return isNil(style) ? null : query ? { [ensureMQ(query)]: style } : style;
}

type AnyStyleF = (...args: any[]) => Style;

function handleStyle(
  style: Style | AnyStyleF,
  input: boolean | StyleResult | AnyStyleF,
  props: unknown,
  mediaKey: MediaKey,
): Style | Nil {
  // selector
  if (isFunction(input)) {
    return input(
      props,
      (value) => handleStyle(style, value, props, mediaKey),
      mediaKey,
    );
  }

  if (isFunction(style)) {
    return style(input, props, mediaKey);
  }

  return input === true ? style : null;
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
type StaticOrStyleFunc<P, PX> =
  | Style
  | PropStyleFunction<PX | P>
  | PropStylesFunction<PX | P>;

export function createStyles<
  P extends Props = Props,
  Theme extends {} = never,
  Media extends {} = never,
  PX = WithTheme<P, Theme, Media>
>(
  styles: StyleInputFromProps<P>,
  staticOrStyleFunc?: StaticOrStyleFunc<P, PX>,
): PropStylesFunction<PX> {
  function getStyles(props: PX): Style[] {
    const media = getThemeMedia(props);
    const defaultMediaKey = getDefaultMedia(props);
    const mediaKeys = Object.keys(media);
    let initial: Style[] = isNil(staticOrStyleFunc)
      ? []
      : isFunction(staticOrStyleFunc)
      ? toArray(staticOrStyleFunc(props))
      : toArray(staticOrStyleFunc);

    function mapStyles(
      input: boolean | StyleResult | AnyStyleF,
      style: Style | AnyStyleF,
      mediaKey: string = '',
    ) {
      /// Handling responsive ObjLit
      if (isPlainObject(input)) {
        return mapObj(input, (value, key) =>
          mapStyles(value, style, key as string),
        );
      }

      /// Handling responsive Array
      if (isArray(input)) {
        return input.map((value, key) =>
          mapStyles(value, style, key.toString()),
        );
      }

      const hasMediaKey =
        mediaKey && mediaKey !== DEFAULT_MEDIA_KEY && mediaKey !== '0';

      let mKey = mediaKey;

      if (hasMediaKey) {
        if (isNumeric(mediaKey)) {
          mKey = mediaKeys[mediaKey];
        }
      }

      return handleStyleReturn(
        getMedia(mKey || defaultMediaKey, media),
        handleStyle(style, input, props, mKey),
        hasMediaKey && mediaKey,
      );
    }

    return Object.keys(styles).reduce(
      (acc, styleKey) =>
        acc.concat(
          isNil(styleKey && props[styleKey])
            ? []
            : toArray(styles[styleKey]).map(
                (style) => mapStyles(props[styleKey], style) || [],
              ),
        ),
      initial,
    );
  }

  return getStyles;
}
