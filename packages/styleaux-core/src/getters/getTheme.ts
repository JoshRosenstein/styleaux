/**
 * Gets theme from Props
 *
 *@link getThemePathOr
 *
 * @param input Target prop within theme, string, array, or string dot syntax
 * @param defaultValue Fallback Value
 */
export function getTheme<P extends { theme?: Record<string, any> }>(
  props: P,
): P['theme'];

export function getTheme<P>(props: P): undefined;

export function getTheme(props: Record<string, any>) {
  return props && props.theme;
}

export default getTheme;
