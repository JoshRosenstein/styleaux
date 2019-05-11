import { createBorderBottomRightRadius } from '../borderBottomRightRadius';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderBottomRightRadius', () => {
  it('should return a function', () => {
    const result = createBorderBottomRightRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBottomRightRadius` as component and css prop', () => {
    const result = createBorderBottomRightRadius()({
      borderBottomRightRadius: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderBottomRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBottomRightRadius<'a'>()({
      borderBottomRightRadius: 'a',
    });
    expect(toStyles(result)).toEqual({ borderBottomRightRadius: 'a' });
  });

  it('should use an interface which marks `createBorderBottomRightRadius` as optional', () => {
    const result = createBorderBottomRightRadius<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBottomRightRadius<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderBottomRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBottomRightRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBottomRightRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomRightRadius: 'a',
      [MQ.D]: {
        borderBottomRightRadius: 'b',
      },
      [MQ.T]: {
        borderBottomRightRadius: 'c',
      },
      [MQ.M]: {
        borderBottomRightRadius: 'd',
      },
    });
  });
});
