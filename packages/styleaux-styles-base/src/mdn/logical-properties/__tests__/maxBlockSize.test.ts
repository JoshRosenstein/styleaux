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

import { maxBlockSize } from '../maxBlockSize';

describe('maxBlockSize', () => {
  it('should return a function', () => {
    const result = maxBlockSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maxBlockSize` as component and css prop', () => {
    const result = maxBlockSize()({ maxBlockSize: 'inherit' });
    expect(toStyles(result)).toEqual({ maxBlockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxBlockSize<'a'>()({ maxBlockSize: 'a' });
    expect(toStyles(result)).toEqual({ maxBlockSize: 'a' });
  });

  it('should use an interface which marks `maxBlockSize` as optional', () => {
    const result = maxBlockSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maxBlockSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maxBlockSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxBlockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxBlockSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maxBlockSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maxBlockSize: 'a',
      [MQ.D]: {
        maxBlockSize: 'b',
      },
      [MQ.T]: {
        maxBlockSize: 'c',
      },
      [MQ.M]: {
        maxBlockSize: 'd',
      },
    });
  });
});
