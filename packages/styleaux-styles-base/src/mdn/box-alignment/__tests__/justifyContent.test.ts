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

import { createJustifyContent } from '../justifyContent';

describe('justifyContent', () => {
  it('should return a function', () => {
    const result = createJustifyContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `justifyContent` as component and css prop', () => {
    const result = createJustifyContent()({ justifyContent: 'inherit' });
    expect(toStyles(result)).toEqual({ justifyContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createJustifyContent<'a'>()({ justifyContent: 'a' });
    expect(toStyles(result)).toEqual({ justifyContent: 'a' });
  });

  it('should use an interface which marks `justifyContent` as optional', () => {
    const result = createJustifyContent<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createJustifyContent<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ justifyContent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      justifyContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createJustifyContent<
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
