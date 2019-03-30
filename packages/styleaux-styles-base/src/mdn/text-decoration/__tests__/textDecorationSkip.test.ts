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

import { textDecorationSkip } from '../textDecorationSkip';

describe('textDecorationSkip', () => {
  it('should return a function', () => {
    const result = textDecorationSkip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textDecorationSkip` as component and css prop', () => {
    const result = textDecorationSkip()({ textDecorationSkip: 'inherit' });
    expect(toStyles(result)).toEqual({ textDecorationSkip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationSkip<'a'>()({ textDecorationSkip: 'a' });
    expect(toStyles(result)).toEqual({ textDecorationSkip: 'a' });
  });

  it('should use an interface which marks `textDecorationSkip` as optional', () => {
    const result = textDecorationSkip<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textDecorationSkip<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textDecorationSkip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecorationSkip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationSkip<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textDecorationSkip: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecorationSkip: 'a',
      [MQ.D]: {
        textDecorationSkip: 'b',
      },
      [MQ.T]: {
        textDecorationSkip: 'c',
      },
      [MQ.M]: {
        textDecorationSkip: 'd',
      },
    });
  });
});
