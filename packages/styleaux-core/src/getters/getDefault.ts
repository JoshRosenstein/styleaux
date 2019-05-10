import { NeverToUndefined } from '../types';
import { getThemePathOr } from './getThemePathOr';
import { DEFAULT_KEY, THEME_KEY } from '../constants';

export function getDefault<K extends string, D = never>(
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

export function getDefault(input: any, defaultValue = DEFAULT_KEY) {
  return getThemePathOr([DEFAULT_KEY, input], defaultValue);
}

export default getDefault;

// const t=getDefault('as')({default:{as:2}})
