import { createMaskRepeat } from '../maskRepeat';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMaskRepeat', () => {
  it('should return a function', () => {
    const result = createMaskRepeat();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMaskRepeat` as component and css prop', () => {
    const result = createMaskRepeat()({ maskRepeat: 'inherit' });
    expect(toStyles(result)).toEqual({ maskRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaskRepeat<'a'>()({ maskRepeat: 'a' });
    expect(toStyles(result)).toEqual({ maskRepeat: 'a' });
  });

  it('should use an interface which marks `createMaskRepeat` as optional', () => {
    const result = createMaskRepeat<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMaskRepeat<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaskRepeat<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      maskRepeat: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskRepeat: 'a',
      [MQ.D]: {
        maskRepeat: 'b',
      },
      [MQ.T]: {
        maskRepeat: 'c',
      },
      [MQ.M]: {
        maskRepeat: 'd',
      },
    });
  });
});
