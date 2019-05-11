import { createMarginBottom } from '../marginBottom';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMarginBottom', () => {
  it('should return a function', () => {
    const result = createMarginBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginBottom` as component and css prop', () => {
    const result = createMarginBottom()({ marginBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginBottom<'a'>()({ marginBottom: 'a' });
    expect(toStyles(result)).toEqual({ marginBottom: 'a' });
  });

  it('should use an interface which marks `createMarginBottom` as optional', () => {
    const result = createMarginBottom<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginBottom<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ marginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginBottom<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      marginBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBottom: 'a',
      [MQ.D]: {
        marginBottom: 'b',
      },
      [MQ.T]: {
        marginBottom: 'c',
      },
      [MQ.M]: {
        marginBottom: 'd',
      },
    });
  });
});
