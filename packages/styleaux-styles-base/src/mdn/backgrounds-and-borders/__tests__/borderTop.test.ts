import { createBorderTop } from '../borderTop';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderTop', () => {
  it('should return a function', () => {
    const result = createBorderTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderTop` as component and css prop', () => {
    const result = createBorderTop()({ borderTop: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderTop<'a'>()({ borderTop: 'a' });
    expect(toStyles(result)).toEqual({ borderTop: 'a' });
  });

  it('should use an interface which marks `createBorderTop` as optional', () => {
    const result = createBorderTop<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderTop<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderTop<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      borderTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTop: 'a',
      [MQ.D]: {
        borderTop: 'b',
      },
      [MQ.T]: {
        borderTop: 'c',
      },
      [MQ.M]: {
        borderTop: 'd',
      },
    });
  });
});
