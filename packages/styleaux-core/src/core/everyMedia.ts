import {  identity } from '@roseys/futils';
import { isPlainObject } from 'typed-is';
import { getThemeMedia } from '../getters';
import { createWarnOnce } from '../utils/warn-once';


const warnOnce = createWarnOnce('everyMedia');

const has = (a: string[], b: string[]) => b.some(key => a.includes(key));
//const identity = <T>(v: T) => v;

export const everyMedia = (props, value, wrapper = identity) => {
  const media = getThemeMedia(props);

  if (isPlainObject(value)) {
    const mediaKeys = Object.keys(media);
    const valueKeys = Object.keys(value);

    if (has(mediaKeys, valueKeys)) {
      return (valueKeys as any[]).reduce((acc, key) => {
        if (mediaKeys.includes(key as string)) {
          const q = media[key];
          const v=wrapper(value[key])
          if(!v){return acc}
          if (q) {
            acc[`@media ${q}`] = wrapper(value[key]);
            return acc;
          } else {
            return Object.assign(acc, wrapper(value[key]));
          }
        }
        warnOnce(`Could not Find media for key %d`, key);
        return acc;
      }, {});

    }
  }

  return wrapper(value);
};
