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

import { createBoxDecorationBreak } from '../boxDecorationBreak';

describe('boxDecorationBreak', () => {
  it('should return a function', () => {
    const result = createBoxDecorationBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `boxDecorationBreak` as component and css prop', () => {
    const result = createBoxDecorationBreak()({ boxDecorationBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ boxDecorationBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBoxDecorationBreak<'a'>()({ boxDecorationBreak: 'a' });
    expect(toStyles(result)).toEqual({ boxDecorationBreak: 'a' });
  });

  it('should use an interface which marks `boxDecorationBreak` as optional', () => {
    const result = createBoxDecorationBreak<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBoxDecorationBreak<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxDecorationBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxDecorationBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBoxDecorationBreak<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      boxDecorationBreak: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      boxDecorationBreak: 'a',
      [MQ.D]: {
        boxDecorationBreak: 'b',
      },
      [MQ.T]: {
        boxDecorationBreak: 'c',
      },
      [MQ.M]: {
        boxDecorationBreak: 'd',
      },
    });
  });
});
