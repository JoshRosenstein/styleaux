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

import { borderLeft } from '../borderLeft';

describe('borderLeft', () => {
  it('should return a function', () => {
    const result = borderLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderLeft` as component and css prop', () => {
    const result = borderLeft()({ borderLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeft<'a'>()({ borderLeft: 'a' });
    expect(toStyles(result)).toEqual({ borderLeft: 'a' });
  });

  it('should use an interface which marks `borderLeft` as optional', () => {
    const result = borderLeft<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderLeft<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderLeft: 'a',
      [MQ.D]: {
        borderLeft: 'b',
      },
      [MQ.T]: {
        borderLeft: 'c',
      },
      [MQ.M]: {
        borderLeft: 'd',
      },
    });
  });
});
