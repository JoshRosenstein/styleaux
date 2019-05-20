import { getTheme } from './getTheme';
import { Props, Keys } from '../core/types';

export const getKey = <P extends Props>(
  props: P,
  keys?: Keys,
): string | null | undefined => keys && keys.find((k) => props[k] != null);

export const getThemeKey = <P extends Props>(
  props: P,
  keys?: Keys,
): string | undefined => {
  if (keys) {
    const theme = getTheme(props);
    return theme && keys.find((k) => theme[k] != null);
  }
};
