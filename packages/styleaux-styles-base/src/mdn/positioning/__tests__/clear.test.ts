import { createClear } from '../clear';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createClear', () => {
  it('should return a function', () => {
    const result = createClear();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createClear` as component and css prop', () => {
    const result = createClear()({ clear: 'inherit' });
    expect(toStyles(result)).toEqual({ clear: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createClear<'a'>()({ clear: 'a' });
    expect(toStyles(result)).toEqual({ clear: 'a' });
  });

  it('should use an interface which marks `createClear` as optional', () => {
    const result = createClear<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createClear<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ clear: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      clear: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createClear<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      clear: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      clear: 'a',
      [MQ.D]: {
        clear: 'b',
      },
      [MQ.T]: {
        clear: 'c',
      },
      [MQ.M]: {
        clear: 'd',
      },
    });
  });
});
