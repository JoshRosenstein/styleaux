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

import { minBlockSize } from '../minBlockSize';

describe('minBlockSize', () => {
  it('should return a function', () => {
    const result = minBlockSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `minBlockSize` as component and css prop', () => {
    const result = minBlockSize()({ minBlockSize: 'inherit' });
    expect(toStyles(result)).toEqual({ minBlockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minBlockSize<'a'>()({ minBlockSize: 'a' });
    expect(toStyles(result)).toEqual({ minBlockSize: 'a' });
  });

  it('should use an interface which marks `minBlockSize` as optional', () => {
    const result = minBlockSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = minBlockSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minBlockSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minBlockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minBlockSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      minBlockSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      minBlockSize: 'a',
      [MQ.D]: {
        minBlockSize: 'b',
      },
      [MQ.T]: {
        minBlockSize: 'c',
      },
      [MQ.M]: {
        minBlockSize: 'd',
      },
    });
  });
});
