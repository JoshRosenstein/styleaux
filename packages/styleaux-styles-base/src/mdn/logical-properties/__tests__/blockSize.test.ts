import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBlockSize } from '../blockSize';

describe('createBlockSize', () => {
  it('should return a function', () => {
    const result = createBlockSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBlockSize` as component and css prop', () => {
    const result = createBlockSize()({ blockSize: 'inherit' });
    expect(toStyles(result)).toEqual({ blockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBlockSize<'a'>()({ blockSize: 'a' });
    expect(toStyles(result)).toEqual({ blockSize: 'a' });
  });

  it('should use an interface which marks `createBlockSize` as optional', () => {
    const result = createBlockSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBlockSize<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ blockSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      blockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBlockSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      blockSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      blockSize: 'a',
      [MQ.D]: {
        blockSize: 'b',
      },
      [MQ.T]: {
        blockSize: 'c',
      },
      [MQ.M]: {
        blockSize: 'd',
      },
    });
  });
});
