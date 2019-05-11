import { createLineHeight } from '../lineHeight';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createLineHeight', () => {
  it('should return a function', () => {
    const result = createLineHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createLineHeight` as component and css prop', () => {
    const result = createLineHeight()({ lineHeight: 'inherit' });
    expect(toStyles(result)).toEqual({ lineHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createLineHeight<'a'>()({ lineHeight: 'a' });
    expect(toStyles(result)).toEqual({ lineHeight: 'a' });
  });

  it('should use an interface which marks `createLineHeight` as optional', () => {
    const result = createLineHeight<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createLineHeight<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ lineHeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      lineHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createLineHeight<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      lineHeight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      lineHeight: 'a',
      [MQ.D]: {
        lineHeight: 'b',
      },
      [MQ.T]: {
        lineHeight: 'c',
      },
      [MQ.M]: {
        lineHeight: 'd',
      },
    });
  });
});
