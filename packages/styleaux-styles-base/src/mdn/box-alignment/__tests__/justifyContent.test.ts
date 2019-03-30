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

import { justifyContent } from '../justifyContent';

describe('justifyContent', () => {
  it('should return a function', () => {
    const result = justifyContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `justifyContent` as component and css prop', () => {
    const result = justifyContent()({ justifyContent: 'inherit' });
    expect(toStyles(result)).toEqual({ justifyContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifyContent<'a'>()({ justifyContent: 'a' });
    expect(toStyles(result)).toEqual({ justifyContent: 'a' });
  });

  it('should use an interface which marks `justifyContent` as optional', () => {
    const result = justifyContent<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = justifyContent<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ justifyContent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      justifyContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifyContent<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      justifyContent: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      justifyContent: 'a',
      [MQ.D]: {
        justifyContent: 'b',
      },
      [MQ.T]: {
        justifyContent: 'c',
      },
      [MQ.M]: {
        justifyContent: 'd',
      },
    });
  });
});
