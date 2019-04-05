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

import { createBorderBlockEnd } from '../borderBlockEnd';

describe('borderBlockEnd', () => {
  it('should return a function', () => {
    const result = createBorderBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEnd` as component and css prop', () => {
    const result = createBorderBlockEnd()({ borderBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockEnd<'a'>()({ borderBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockEnd: 'a' });
  });

  it('should use an interface which marks `borderBlockEnd` as optional', () => {
    const result = createBorderBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockEnd: 'a',
      [MQ.D]: {
        borderBlockEnd: 'b',
      },
      [MQ.T]: {
        borderBlockEnd: 'c',
      },
      [MQ.M]: {
        borderBlockEnd: 'd',
      },
    });
  });
});
