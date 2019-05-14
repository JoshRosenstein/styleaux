import { getThemeValue } from '@styleaux/core';

export function themeValue<T>({
  themeKey,
  transform,
  themeGetter = getThemeValue(themeKey, transform),
}: {
  themeKey: string;
  transform?: any;
  themeGetter?: any;
}) {
  return (input: T, props?: {}, mediaKey?: string) =>
    themeGetter(input, input, mediaKey)(props);
}
