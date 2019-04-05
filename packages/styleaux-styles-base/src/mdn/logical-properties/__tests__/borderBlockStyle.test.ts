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

import { createBorderBlockStyle } from '../borderBlockStyle';

describe('borderBlockStyle', () => {
  it('should return a function', () => {
    const result = createBorderBlockStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStyle` as component and css prop', () => {
    const result = createBorderBlockStyle()({ borderBlockStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockStyle<'a'>()({ borderBlockStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockStyle` as optional', () => {
    const result = createBorderBlockStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStyle: 'a',
      [MQ.D]: {
        borderBlockStyle: 'b',
      },
      [MQ.T]: {
        borderBlockStyle: 'c',
      },
      [MQ.M]: {
        borderBlockStyle: 'd',
      },
    });
  });
});
