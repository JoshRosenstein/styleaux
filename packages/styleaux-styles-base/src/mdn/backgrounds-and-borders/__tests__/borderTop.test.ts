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

import { createBorderTop } from '../borderTop';

describe('borderTop', () => {
  it('should return a function', () => {
    const result = createBorderTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTop` as component and css prop', () => {
    const result = createBorderTop()({ borderTop: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderTop<'a'>()({ borderTop: 'a' });
    expect(toStyles(result)).toEqual({ borderTop: 'a' });
  });

  it('should use an interface which marks `borderTop` as optional', () => {
    const result = createBorderTop<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderTop<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderTop<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTop: 'a',
      [MQ.D]: {
        borderTop: 'b',
      },
      [MQ.T]: {
        borderTop: 'c',
      },
      [MQ.M]: {
        borderTop: 'd',
      },
    });
  });
});
