import { createTabSize } from '../tabSize';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTabSize', () => {
  it('should return a function', () => {
    const result = createTabSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTabSize` as component and css prop', () => {
    const result = createTabSize()({ tabSize: 'inherit' });
    expect(toStyles(result)).toEqual({ tabSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTabSize<'a'>()({ tabSize: 'a' });
    expect(toStyles(result)).toEqual({ tabSize: 'a' });
  });

  it('should use an interface which marks `createTabSize` as optional', () => {
    const result = createTabSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTabSize<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ tabSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      tabSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTabSize<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      tabSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      tabSize: 'a',
      [MQ.D]: {
        tabSize: 'b',
      },
      [MQ.T]: {
        tabSize: 'c',
      },
      [MQ.M]: {
        tabSize: 'd',
      },
    });
  });
});
