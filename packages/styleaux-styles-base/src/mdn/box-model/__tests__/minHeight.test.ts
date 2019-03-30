import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { minHeight } from '../minHeight';

describe('minHeight', () => {
  it('should return a function', () => {
    const result = minHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `minHeight` as component and css prop', () => {
    const result = minHeight()({ minHeight: 'inherit' });
    expect(toStyles(result)).toEqual({ minHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minHeight<'a'>()({ minHeight: 'a' });
    expect(toStyles(result)).toEqual({ minHeight: 'a' });
  });

  it('should use an interface which marks `minHeight` as optional', () => {
    const result = minHeight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = minHeight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minHeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minHeight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      minHeight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      minHeight: 'a',
      [MQ.D]: {
        minHeight: 'b',
      },
      [MQ.T]: {
        minHeight: 'c',
      },
      [MQ.M]: {
        minHeight: 'd',
      },
    });
  });
});
