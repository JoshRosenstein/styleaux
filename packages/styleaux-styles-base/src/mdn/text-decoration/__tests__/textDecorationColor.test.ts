import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextDecorationColor } from '../textDecorationColor';

describe('createTextDecorationColor', () => {
  it('should return a function', () => {
    const result = createTextDecorationColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextDecorationColor` as component and css prop', () => {
    const result = createTextDecorationColor()({ textDecorationColor: 'inherit' });
    expect(toStyles(result)).toEqual({ textDecorationColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecorationColor<'a'>()({ textDecorationColor: 'a' });
    expect(toStyles(result)).toEqual({ textDecorationColor: 'a' });
  });

  it('should use an interface which marks `createTextDecorationColor` as optional', () => {
    const result = createTextDecorationColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextDecorationColor<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textDecorationColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecorationColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textDecorationColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textDecorationColor: 'a',
      [MQ.D]: {
        textDecorationColor: 'b',
      },
      [MQ.T]: {
        textDecorationColor: 'c',
      },
      [MQ.M]: {
        textDecorationColor: 'd',
      },
    });
  });
});
