import { createMaskClip } from '../maskClip';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMaskClip', () => {
  it('should return a function', () => {
    const result = createMaskClip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMaskClip` as component and css prop', () => {
    const result = createMaskClip()({ maskClip: 'inherit' });
    expect(toStyles(result)).toEqual({ maskClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaskClip<'a'>()({ maskClip: 'a' });
    expect(toStyles(result)).toEqual({ maskClip: 'a' });
  });

  it('should use an interface which marks `createMaskClip` as optional', () => {
    const result = createMaskClip<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMaskClip<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskClip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaskClip<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      maskClip: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskClip: 'a',
      [MQ.D]: {
        maskClip: 'b',
      },
      [MQ.T]: {
        maskClip: 'c',
      },
      [MQ.M]: {
        maskClip: 'd',
      },
    });
  });
});
