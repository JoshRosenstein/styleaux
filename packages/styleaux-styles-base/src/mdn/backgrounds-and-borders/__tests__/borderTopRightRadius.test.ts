import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderTopRightRadius } from '../borderTopRightRadius';

describe('createBorderTopRightRadius', () => {
  it('should return a function', () => {
    const result = createBorderTopRightRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderTopRightRadius` as component and css prop', () => {
    const result = createBorderTopRightRadius()({ borderTopRightRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderTopRightRadius<'a'>()({ borderTopRightRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderTopRightRadius: 'a' });
  });

  it('should use an interface which marks `createBorderTopRightRadius` as optional', () => {
    const result = createBorderTopRightRadius<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderTopRightRadius<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderTopRightRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderTopRightRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderTopRightRadius: 'a',
      [MQ.D]: {
        borderTopRightRadius: 'b',
      },
      [MQ.T]: {
        borderTopRightRadius: 'c',
      },
      [MQ.M]: {
        borderTopRightRadius: 'd',
      },
    });
  });
});
