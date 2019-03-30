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

import { paddingLeft } from '../paddingLeft';

describe('paddingLeft', () => {
  it('should return a function', () => {
    const result = paddingLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingLeft` as component and css prop', () => {
    const result = paddingLeft()({ paddingLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingLeft<'a'>()({ paddingLeft: 'a' });
    expect(toStyles(result)).toEqual({ paddingLeft: 'a' });
  });

  it('should use an interface which marks `paddingLeft` as optional', () => {
    const result = paddingLeft<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingLeft<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingLeft: 'a',
      [MQ.D]: {
        paddingLeft: 'b',
      },
      [MQ.T]: {
        paddingLeft: 'c',
      },
      [MQ.M]: {
        paddingLeft: 'd',
      },
    });
  });
});
