import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createMinBlockSize } from '../minBlockSize';

describe('createMinBlockSize', () => {
  it('should return a function', () => {
    const result = createMinBlockSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMinBlockSize` as component and css prop', () => {
    const result = createMinBlockSize()({ minBlockSize: 'inherit' });
    expect(toStyles(result)).toEqual({ minBlockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMinBlockSize<'a'>()({ minBlockSize: 'a' });
    expect(toStyles(result)).toEqual({ minBlockSize: 'a' });
  });

  it('should use an interface which marks `createMinBlockSize` as optional', () => {
    const result = createMinBlockSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMinBlockSize<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minBlockSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minBlockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMinBlockSize<
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
