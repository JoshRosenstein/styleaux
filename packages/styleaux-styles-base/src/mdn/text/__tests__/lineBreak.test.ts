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

import { lineBreak } from '../lineBreak';

describe('lineBreak', () => {
  it('should return a function', () => {
    const result = lineBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `lineBreak` as component and css prop', () => {
    const result = lineBreak()({ lineBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ lineBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = lineBreak<'a'>()({ lineBreak: 'a' });
    expect(toStyles(result)).toEqual({ lineBreak: 'a' });
  });

  it('should use an interface which marks `lineBreak` as optional', () => {
    const result = lineBreak<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = lineBreak<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ lineBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      lineBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = lineBreak<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      lineBreak: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      lineBreak: 'a',
      [MQ.D]: {
        lineBreak: 'b',
      },
      [MQ.T]: {
        lineBreak: 'c',
      },
      [MQ.M]: {
        lineBreak: 'd',
      },
    });
  });
});
