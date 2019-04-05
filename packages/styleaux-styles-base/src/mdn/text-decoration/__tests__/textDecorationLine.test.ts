import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createTextDecorationLine } from '../textDecorationLine';

describe('textDecorationLine', () => {
  it('should return a function', () => {
    const result = createTextDecorationLine();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textDecorationLine` as component and css prop', () => {
    const result = createTextDecorationLine()({ textDecorationLine: 'inherit' });
    expect(toStyles(result)).toEqual({ textDecorationLine: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecorationLine<'a'>()({ textDecorationLine: 'a' });
    expect(toStyles(result)).toEqual({ textDecorationLine: 'a' });
  });

  it('should use an interface which marks `textDecorationLine` as optional', () => {
    const result = createTextDecorationLine<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextDecorationLine<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textDecorationLine: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationLine: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecorationLine<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textDecorationLine: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationLine: 'a',
      [MQ.D]: {
        textDecorationLine: 'b',
      },
      [MQ.T]: {
        textDecorationLine: 'c',
      },
      [MQ.M]: {
        textDecorationLine: 'd',
      },
    });
  });
});
