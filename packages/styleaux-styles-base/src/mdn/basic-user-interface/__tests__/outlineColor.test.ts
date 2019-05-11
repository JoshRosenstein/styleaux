import { createOutlineColor } from '../outlineColor';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createOutlineColor', () => {
  it('should return a function', () => {
    const result = createOutlineColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOutlineColor` as component and css prop', () => {
    const result = createOutlineColor()({ outlineColor: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOutlineColor<'a'>()({ outlineColor: 'a' });
    expect(toStyles(result)).toEqual({ outlineColor: 'a' });
  });

  it('should use an interface which marks `createOutlineColor` as optional', () => {
    const result = createOutlineColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOutlineColor<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ outlineColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOutlineColor<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      outlineColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      outlineColor: 'a',
      [MQ.D]: {
        outlineColor: 'b',
      },
      [MQ.T]: {
        outlineColor: 'c',
      },
      [MQ.M]: {
        outlineColor: 'd',
      },
    });
  });
});
