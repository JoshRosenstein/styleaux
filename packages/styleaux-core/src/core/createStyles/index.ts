import { mapObj, toArray } from '@roseys/futils';
import { DEFAULT_MEDIA_KEY } from '../../constants';
import { createWarnOnce, ensureMQ } from '../../utils';
import { Style, StyleResult, Nil } from '@styleaux/types';
import { StaticOrStyleFunc, StyleInputFromProps } from './types';
import { getDefaultMediaKey, getMedia, getThemeMedia } from '../../getters';
import { isArray, isFunction, isNil, isNumeric, isPlainObject } from 'typed-is';
import {
  MediaKey,
  Props,
  PropStyleArrayFunc,
  WithTheme,
  StyleFunc,
} from '../types';
const warnOnce = createWarnOnce('createStyle');

function wrapStyle(
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

function handleStyle(
  style: Style | StyleFunc,
  input: boolean | StyleResult | StyleFunc,
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

export const createStyleMapper = <P extends Props>(props: P) => {
  const media = getThemeMedia(props);
  const defaultMediaKey = getDefaultMediaKey(props);
  const mediaKeys = Object.keys(media);

  return function mapStyles(
    input: boolean | StyleResult | StyleFunc,
    style: Style | StyleFunc,
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
      return input.map((value, key) => mapStyles(value, style, key.toString()));
    }

    const hasMediaKey =
      mediaKey && mediaKey !== DEFAULT_MEDIA_KEY && mediaKey !== '0';

    let mKey =
      hasMediaKey && isNumeric(mediaKey) ? mediaKeys[mediaKey] : mediaKey;

    return wrapStyle(
      getMedia(mKey || defaultMediaKey, media),
      handleStyle(style, input, props, mKey),
      hasMediaKey && mediaKey,
    );
  };
};

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
  P extends Props = Props,
  Theme extends {} = never,
  Media extends {} = never,
  PX = WithTheme<P, Theme, Media>
>(
  styles: StyleInputFromProps<P>,
  staticOrStyleFunc?: StaticOrStyleFunc<P, PX>,
): PropStyleArrayFunc<PX> {
  function getStyles(props: PX): Style[] {
    let initial: Style[] = isNil(staticOrStyleFunc)
      ? []
      : isFunction(staticOrStyleFunc)
      ? toArray(staticOrStyleFunc(props))
      : toArray(staticOrStyleFunc);
    const mapStyles = createStyleMapper(props);

    return Object.keys(styles).reduce(
      (acc, styleKey) =>
        isNil(styleKey && props[styleKey])
          ? acc
          : acc.concat(
              toArray(styles[styleKey]).map(
                (style) => mapStyles(props[styleKey], style) || [],
              ),
            ),
      initial,
    );
  }

  return getStyles;
}
