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

import { textJustify } from '../textJustify';

describe('textJustify', () => {
  it('should return a function', () => {
    const result = textJustify();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textJustify` as component and css prop', () => {
    const result = textJustify()({ textJustify: 'inherit' });
    expect(toStyles(result)).toEqual({ textJustify: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textJustify<'a'>()({ textJustify: 'a' });
    expect(toStyles(result)).toEqual({ textJustify: 'a' });
  });

  it('should use an interface which marks `textJustify` as optional', () => {
    const result = textJustify<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textJustify<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textJustify: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textJustify: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textJustify<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textJustify: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textJustify: 'a',
      [MQ.D]: {
        textJustify: 'b',
      },
      [MQ.T]: {
        textJustify: 'c',
      },
      [MQ.M]: {
        textJustify: 'd',
      },
    });
  });
});
