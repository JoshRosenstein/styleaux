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

import { createBorderRight } from '../borderRight';

describe('borderRight', () => {
  it('should return a function', () => {
    const result = createBorderRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderRight` as component and css prop', () => {
    const result = createBorderRight()({ borderRight: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderRight<'a'>()({ borderRight: 'a' });
    expect(toStyles(result)).toEqual({ borderRight: 'a' });
  });

  it('should use an interface which marks `borderRight` as optional', () => {
    const result = createBorderRight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderRight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRight: 'a',
      [MQ.D]: {
        borderRight: 'b',
      },
      [MQ.T]: {
        borderRight: 'c',
      },
      [MQ.M]: {
        borderRight: 'd',
      },
    });
  });
});
