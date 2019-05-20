import { getThemeValue, Props } from '@styleaux/core';

export function themeValue<T>({
  themeKey,
  transform,
}: {
  themeKey: string;
  transform?: any;
}) {
  return (input: T, props: Props, mediaKey?: string) =>
    getThemeValue(themeKey, transform)(input, input, mediaKey)(props);
}
