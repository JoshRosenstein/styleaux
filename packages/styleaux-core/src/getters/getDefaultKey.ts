import { getThemePathOr } from './getThemePathOr';
import { NeverToUndefined } from '@styleaux/types';
import { DEFAULT_KEY, THEME_KEY } from '../constants';

export function getDefaultKey<K extends string, D = never>(
  input: K,
  defaultValue?: D,
): <P>(
  props: P,
) => P extends {
  [THEME_KEY]: {
    [DEFAULT_KEY]: { [index: string]: any };
  };
}
  ? K extends keyof P[typeof THEME_KEY][typeof DEFAULT_KEY]
    ? P[typeof THEME_KEY][typeof DEFAULT_KEY][K]
    : NeverToUndefined<D>
  : NeverToUndefined<D>;

export function getDefaultKey(input: any, defaultValue = DEFAULT_KEY) {
  return getThemePathOr([DEFAULT_KEY, input], defaultValue);
}

export default getDefaultKey;
