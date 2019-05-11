import { createPerspective } from '../perspective';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPerspective', () => {
  it('should return a function', () => {
    const result = createPerspective();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPerspective` as component and css prop', () => {
    const result = createPerspective()({ perspective: 'inherit' });
    expect(toStyles(result)).toEqual({ perspective: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPerspective<'a'>()({ perspective: 'a' });
    expect(toStyles(result)).toEqual({ perspective: 'a' });
  });

  it('should use an interface which marks `createPerspective` as optional', () => {
    const result = createPerspective<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPerspective<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ perspective: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      perspective: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPerspective<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      perspective: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      perspective: 'a',
      [MQ.D]: {
        perspective: 'b',
      },
      [MQ.T]: {
        perspective: 'c',
      },
      [MQ.M]: {
        perspective: 'd',
      },
    });
  });
});
