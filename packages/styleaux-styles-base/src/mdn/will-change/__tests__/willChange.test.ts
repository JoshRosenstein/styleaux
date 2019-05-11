import { createWillChange } from '../willChange';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createWillChange', () => {
  it('should return a function', () => {
    const result = createWillChange();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createWillChange` as component and css prop', () => {
    const result = createWillChange()({ willChange: 'inherit' });
    expect(toStyles(result)).toEqual({ willChange: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWillChange<'a'>()({ willChange: 'a' });
    expect(toStyles(result)).toEqual({ willChange: 'a' });
  });

  it('should use an interface which marks `createWillChange` as optional', () => {
    const result = createWillChange<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createWillChange<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ willChange: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      willChange: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWillChange<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      willChange: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      willChange: 'a',
      [MQ.D]: {
        willChange: 'b',
      },
      [MQ.T]: {
        willChange: 'c',
      },
      [MQ.M]: {
        willChange: 'd',
      },
    });
  });
});
