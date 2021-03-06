import { createBorderTopLeftRadius } from '../borderTopLeftRadius';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderTopLeftRadius', () => {
  it('should return a function', () => {
    const result = createBorderTopLeftRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderTopLeftRadius` as component and css prop', () => {
    const result = createBorderTopLeftRadius()({
      borderTopLeftRadius: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderTopLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderTopLeftRadius<'a'>()({
      borderTopLeftRadius: 'a',
    });
    expect(toStyles(result)).toEqual({ borderTopLeftRadius: 'a' });
  });

  it('should use an interface which marks `createBorderTopLeftRadius` as optional', () => {
    const result = createBorderTopLeftRadius<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderTopLeftRadius<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderTopLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderTopLeftRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderTopLeftRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopLeftRadius: 'a',
      [MQ.D]: {
        borderTopLeftRadius: 'b',
      },
      [MQ.T]: {
        borderTopLeftRadius: 'c',
      },
      [MQ.M]: {
        borderTopLeftRadius: 'd',
      },
    });
  });
});
