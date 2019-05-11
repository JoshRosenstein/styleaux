import { createFlexGrow } from '../flexGrow';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFlexGrow', () => {
  it('should return a function', () => {
    const result = createFlexGrow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlexGrow` as component and css prop', () => {
    const result = createFlexGrow()({ flexGrow: 'inherit' });
    expect(toStyles(result)).toEqual({ flexGrow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexGrow<'a'>()({ flexGrow: 'a' });
    expect(toStyles(result)).toEqual({ flexGrow: 'a' });
  });

  it('should use an interface which marks `createFlexGrow` as optional', () => {
    const result = createFlexGrow<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlexGrow<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexGrow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexGrow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexGrow<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      flexGrow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexGrow: 'a',
      [MQ.D]: {
        flexGrow: 'b',
      },
      [MQ.T]: {
        flexGrow: 'c',
      },
      [MQ.M]: {
        flexGrow: 'd',
      },
    });
  });
});
