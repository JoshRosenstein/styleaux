import { isArray } from 'typed-is';
import { getTheme } from './getTheme';
import { pathObj } from '@roseys/futils';
import { MEDIA_KEY } from '../constants';
import { getDefaultMedia } from './getDefaultMedia';

export const getThemeMedia = <T extends { theme?: any }>(props: T) => {
  let media = pathObj(getTheme(props), [MEDIA_KEY]);
  const defaultKey = { [getDefaultMedia(props)]: null };
  if (isArray(media)) {
    return media.reduce(
      (acc, v, i) => {
        acc[i + 1] = v;
        return acc;
      },
      { '0': null },
    );
  }

  return Object.assign(
    defaultKey,

    { ...media },
  );
};

//const t2=getThemeMedia({theme:{media:{m:1},default:{media:MEDIA_KEY}}})
