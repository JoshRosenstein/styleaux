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

import { textAlignLast } from '../textAlignLast';

describe('textAlignLast', () => {
  it('should return a function', () => {
    const result = textAlignLast();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textAlignLast` as component and css prop', () => {
    const result = textAlignLast()({ textAlignLast: 'inherit' });
    expect(toStyles(result)).toEqual({ textAlignLast: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlignLast<'a'>()({ textAlignLast: 'a' });
    expect(toStyles(result)).toEqual({ textAlignLast: 'a' });
  });

  it('should use an interface which marks `textAlignLast` as optional', () => {
    const result = textAlignLast<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textAlignLast<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textAlignLast: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textAlignLast: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlignLast<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textAlignLast: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textAlignLast: 'a',
      [MQ.D]: {
        textAlignLast: 'b',
      },
      [MQ.T]: {
        textAlignLast: 'c',
      },
      [MQ.M]: {
        textAlignLast: 'd',
      },
    });
  });
});
