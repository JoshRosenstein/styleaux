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

import { borderImageRepeat } from '../borderImageRepeat';

describe('borderImageRepeat', () => {
  it('should return a function', () => {
    const result = borderImageRepeat();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImageRepeat` as component and css prop', () => {
    const result = borderImageRepeat()({ borderImageRepeat: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageRepeat<'a'>()({ borderImageRepeat: 'a' });
    expect(toStyles(result)).toEqual({ borderImageRepeat: 'a' });
  });

  it('should use an interface which marks `borderImageRepeat` as optional', () => {
    const result = borderImageRepeat<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderImageRepeat<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImageRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageRepeat<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderImageRepeat: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageRepeat: 'a',
      [MQ.D]: {
        borderImageRepeat: 'b',
      },
      [MQ.T]: {
        borderImageRepeat: 'c',
      },
      [MQ.M]: {
        borderImageRepeat: 'd',
      },
    });
  });
});
