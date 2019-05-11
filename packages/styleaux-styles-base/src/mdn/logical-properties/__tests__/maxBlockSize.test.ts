import { createMaxBlockSize } from '../maxBlockSize';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMaxBlockSize', () => {
  it('should return a function', () => {
    const result = createMaxBlockSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMaxBlockSize` as component and css prop', () => {
    const result = createMaxBlockSize()({ maxBlockSize: 'inherit' });
    expect(toStyles(result)).toEqual({ maxBlockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaxBlockSize<'a'>()({ maxBlockSize: 'a' });
    expect(toStyles(result)).toEqual({ maxBlockSize: 'a' });
  });

  it('should use an interface which marks `createMaxBlockSize` as optional', () => {
    const result = createMaxBlockSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMaxBlockSize<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ maxBlockSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxBlockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaxBlockSize<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
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
