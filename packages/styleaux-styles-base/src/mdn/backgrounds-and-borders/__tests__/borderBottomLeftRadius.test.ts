import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderBottomLeftRadius } from '../borderBottomLeftRadius';

describe('createBorderBottomLeftRadius', () => {
  it('should return a function', () => {
    const result = createBorderBottomLeftRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBottomLeftRadius` as component and css prop', () => {
    const result = createBorderBottomLeftRadius()({ borderBottomLeftRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBottomLeftRadius<'a'>()({ borderBottomLeftRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomLeftRadius: 'a' });
  });

  it('should use an interface which marks `createBorderBottomLeftRadius` as optional', () => {
    const result = createBorderBottomLeftRadius<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBottomLeftRadius<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBottomLeftRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBottomLeftRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderBottomLeftRadius: 'a',
      [MQ.D]: {
        borderBottomLeftRadius: 'b',
      },
      [MQ.T]: {
        borderBottomLeftRadius: 'c',
      },
      [MQ.M]: {
        borderBottomLeftRadius: 'd',
      },
    });
  });
});
