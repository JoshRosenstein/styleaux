import { createResize } from '../resize';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createResize', () => {
  it('should return a function', () => {
    const result = createResize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createResize` as component and css prop', () => {
    const result = createResize()({ resize: 'inherit' });
    expect(toStyles(result)).toEqual({ resize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createResize<'a'>()({ resize: 'a' });
    expect(toStyles(result)).toEqual({ resize: 'a' });
  });

  it('should use an interface which marks `createResize` as optional', () => {
    const result = createResize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createResize<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ resize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      resize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createResize<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      resize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      resize: 'a',
      [MQ.D]: {
        resize: 'b',
      },
      [MQ.T]: {
        resize: 'c',
      },
      [MQ.M]: {
        resize: 'd',
      },
    });
  });
});
