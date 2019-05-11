import { createCounterReset } from '../counterReset';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createCounterReset', () => {
  it('should return a function', () => {
    const result = createCounterReset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createCounterReset` as component and css prop', () => {
    const result = createCounterReset()({ counterReset: 'inherit' });
    expect(toStyles(result)).toEqual({ counterReset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createCounterReset<'a'>()({ counterReset: 'a' });
    expect(toStyles(result)).toEqual({ counterReset: 'a' });
  });

  it('should use an interface which marks `createCounterReset` as optional', () => {
    const result = createCounterReset<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createCounterReset<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ counterReset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      counterReset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createCounterReset<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      counterReset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      counterReset: 'a',
      [MQ.D]: {
        counterReset: 'b',
      },
      [MQ.T]: {
        counterReset: 'c',
      },
      [MQ.M]: {
        counterReset: 'd',
      },
    });
  });
});
