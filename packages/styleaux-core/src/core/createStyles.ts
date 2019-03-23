import { WithTheme, EtractNonResponsiveInputType, IStyles } from "./types";

import { mapObj, toArray, reduce } from "@roseys/futils";
import { isFunction, isPlainObject } from "typed-is";

import { STYLE_PROPS_KEY,STATIC_STYLES_KEY,DEFAULT_MEDIA_KEY} from "../constants";

import { getMedia, getThemeMedia,getDefaultMedia } from "../getters/index";

import { createWarnOnce } from "../utils/warn-once";

const warnOnce = createWarnOnce("createStyle");

function handleStyle(style, input, props, mediaKey) {
  // selector
  if (isFunction(input)) {
    return input(props, value => handleStyle(style, value, props, mediaKey));
  }

  if (isFunction(style)) {
    return style(input, props, mediaKey);
  }

  return input === true ? style : null;
}

export type WithStyleProps<S>={
  styles: S;
  [STYLE_PROPS_KEY]: EtractNonResponsiveInputType<S>;
}

export function createStyles<
  S extends {},
  Media extends {} = never,
  Theme extends {} = never,

>(
  styles: S,
  config?: { defaultTheme?: Theme; queryHandler?: Function }
): ((props: WithTheme<EtractNonResponsiveInputType<S>, Theme, Media>) => IStyles) & WithStyleProps<S>

export function createStyles<S extends {}>(
  styles: S,
  config?: { defaultTheme?: {}; queryHandler?: Function }
): (< Media extends {} = never,Theme extends {} = never>(
  props: WithTheme<EtractNonResponsiveInputType<S>, Theme, Media>
) => IStyles) & { styles: S; styleProps: EtractNonResponsiveInputType<S> };

export function createStyles<S extends {}>(styles:S) {
  function getStyles(props) {
    const media = getThemeMedia(props);
    const defaultMediaKey = getDefaultMedia(props);
const statics=styles[STATIC_STYLES_KEY]
const init= statics?[statics]:[]
    function mapStyles(input, mediaKey, style) {
      const hasMediaKey =
        Boolean(mediaKey) && mediaKey !== defaultMediaKey && mediaKey !== DEFAULT_MEDIA_KEY;

      // value with `theme.media` keys: { all: 0, M: 1 }
      if (isPlainObject(input)) {
        return mapObj(input, (value, key) => mapStyles(value, key, style));
      }
      const query = getMedia(
        mediaKey === undefined ? defaultMediaKey : mediaKey,
        media
      );

      if (hasMediaKey && !query) {
        warnOnce("Could not find mediaKey: " + mediaKey);
        return undefined;
      }
      // general prop style
      const sty = handleStyle(style, input, props, mediaKey);

      return query ? { [`@media ${query}`]: sty } : sty;
    }

    return reduce(
      (acc, propValue, propName) =>
        acc.concat(
          toArray(styles[propName]).map(
            style => mapStyles(propValue, undefined, style) || []
          )
        ),
        init,
      props
    );
  }

  return Object.assign(getStyles, {
    styles
  });
}
