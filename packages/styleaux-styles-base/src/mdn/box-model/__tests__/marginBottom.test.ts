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

import { marginBottom } from '../marginBottom';

describe('marginBottom', () => {
  it('should return a function', () => {
    const result = marginBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginBottom` as component and css prop', () => {
    const result = marginBottom()({ marginBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBottom<'a'>()({ marginBottom: 'a' });
    expect(toStyles(result)).toEqual({ marginBottom: 'a' });
  });

  it('should use an interface which marks `marginBottom` as optional', () => {
    const result = marginBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBottom: 'a',
      [MQ.D]: {
        marginBottom: 'b',
      },
      [MQ.T]: {
        marginBottom: 'c',
      },
      [MQ.M]: {
        marginBottom: 'd',
      },
    });
  });
});
