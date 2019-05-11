import { getThemeValue } from '@styleaux/core';

export function themeValue<T>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue),
}: {
  themeKey: string;
  transformValue?: any;
  themeGetter?: any;
}) {
  return (input: T, props?: {}, mediaKey?: string) =>
    themeGetter(input, input, mediaKey)(props);
}
