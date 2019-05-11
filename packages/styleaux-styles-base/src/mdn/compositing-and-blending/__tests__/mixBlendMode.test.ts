import { createMixBlendMode } from '../mixBlendMode';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMixBlendMode', () => {
  it('should return a function', () => {
    const result = createMixBlendMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMixBlendMode` as component and css prop', () => {
    const result = createMixBlendMode()({ mixBlendMode: 'inherit' });
    expect(toStyles(result)).toEqual({ mixBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMixBlendMode<'a'>()({ mixBlendMode: 'a' });
    expect(toStyles(result)).toEqual({ mixBlendMode: 'a' });
  });

  it('should use an interface which marks `createMixBlendMode` as optional', () => {
    const result = createMixBlendMode<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMixBlendMode<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ mixBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      mixBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMixBlendMode<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      mixBlendMode: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      mixBlendMode: 'a',
      [MQ.D]: {
        mixBlendMode: 'b',
      },
      [MQ.T]: {
        mixBlendMode: 'c',
      },
      [MQ.M]: {
        mixBlendMode: 'd',
      },
    });
  });
});
