import { createMaskOrigin } from '../maskOrigin';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMaskOrigin', () => {
  it('should return a function', () => {
    const result = createMaskOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMaskOrigin` as component and css prop', () => {
    const result = createMaskOrigin()({ maskOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ maskOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaskOrigin<'a'>()({ maskOrigin: 'a' });
    expect(toStyles(result)).toEqual({ maskOrigin: 'a' });
  });

  it('should use an interface which marks `createMaskOrigin` as optional', () => {
    const result = createMaskOrigin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMaskOrigin<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaskOrigin<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      maskOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskOrigin: 'a',
      [MQ.D]: {
        maskOrigin: 'b',
      },
      [MQ.T]: {
        maskOrigin: 'c',
      },
      [MQ.M]: {
        maskOrigin: 'd',
      },
    });
  });
});
