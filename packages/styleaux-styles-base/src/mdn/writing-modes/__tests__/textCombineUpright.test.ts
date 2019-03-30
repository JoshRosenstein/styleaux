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

import { textCombineUpright } from '../textCombineUpright';

describe('textCombineUpright', () => {
  it('should return a function', () => {
    const result = textCombineUpright();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textCombineUpright` as component and css prop', () => {
    const result = textCombineUpright()({ textCombineUpright: 'inherit' });
    expect(toStyles(result)).toEqual({ textCombineUpright: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textCombineUpright<'a'>()({ textCombineUpright: 'a' });
    expect(toStyles(result)).toEqual({ textCombineUpright: 'a' });
  });

  it('should use an interface which marks `textCombineUpright` as optional', () => {
    const result = textCombineUpright<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textCombineUpright<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textCombineUpright: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textCombineUpright: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textCombineUpright<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textCombineUpright: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textCombineUpright: 'a',
      [MQ.D]: {
        textCombineUpright: 'b',
      },
      [MQ.T]: {
        textCombineUpright: 'c',
      },
      [MQ.M]: {
        textCombineUpright: 'd',
      },
    });
  });
});
