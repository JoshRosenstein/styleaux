import { createAnimation } from '../animation';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createAnimation', () => {
  it('should return a function', () => {
    const result = createAnimation();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAnimation` as component and css prop', () => {
    const result = createAnimation()({ animation: 'inherit' });
    expect(toStyles(result)).toEqual({ animation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAnimation<'a'>()({ animation: 'a' });
    expect(toStyles(result)).toEqual({ animation: 'a' });
  });

  it('should use an interface which marks `createAnimation` as optional', () => {
    const result = createAnimation<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAnimation<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animation: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAnimation<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      animation: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animation: 'a',
      [MQ.D]: {
        animation: 'b',
      },
      [MQ.T]: {
        animation: 'c',
      },
      [MQ.M]: {
        animation: 'd',
      },
    });
  });
});
