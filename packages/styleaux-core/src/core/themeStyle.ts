import { Style } from '@styleaux/types';
import { toArray } from '@roseys/futils';
import { isPlainObject } from 'typed-is';
import { everyMedia } from './everyMedia';
import { getThemeValue } from '../getters';

export type ThemeStyleConfig = {
  themeKey: string;
  transformValue?: (...args: any[]) => any;
  themeGetter?: (...args: any[]) => any;
};

const ensureObject = (input: unknown) => {
  return isPlainObject(input) ? input : {};
};

export function themeStyle<T, P>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue),
}: ThemeStyleConfig) {
  return function themeStyleInner(inputs: T, props: P, mediaKey): Style {
    return toArray(inputs).reduce(
      (acc, input) => ({
        ...acc,
        ...ensureObject(
          everyMedia(props, themeGetter(input, null, mediaKey)(props)),
        ),
      }),
      {},
    );
  };
}
