import { isString, isNumber } from 'typed-is';
export const isAtRule = (selector: string): boolean => selector.startsWith('@');

export const prefixMedia = (value: string) => `@media ${value}`;

export const isMediaReady = (selector: string): boolean =>
  selector.startsWith('(');

export const ensureMQ = (input: string | number) => {
  if (isString(input)) {
    if (isAtRule(input)) {
      return input;
    }
    if (isMediaReady(input)) {
      return prefixMedia(input);
    }
  }
  return `@media screen and (min-width: ${
    isNumber(input) ? input + 'px' : input
  })`;
};
