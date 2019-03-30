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

import { whiteSpace } from '../whiteSpace';

describe('whiteSpace', () => {
  it('should return a function', () => {
    const result = whiteSpace();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `whiteSpace` as component and css prop', () => {
    const result = whiteSpace()({ whiteSpace: 'inherit' });
    expect(toStyles(result)).toEqual({ whiteSpace: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = whiteSpace<'a'>()({ whiteSpace: 'a' });
    expect(toStyles(result)).toEqual({ whiteSpace: 'a' });
  });

  it('should use an interface which marks `whiteSpace` as optional', () => {
    const result = whiteSpace<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = whiteSpace<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ whiteSpace: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      whiteSpace: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = whiteSpace<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      whiteSpace: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      whiteSpace: 'a',
      [MQ.D]: {
        whiteSpace: 'b',
      },
      [MQ.T]: {
        whiteSpace: 'c',
      },
      [MQ.M]: {
        whiteSpace: 'd',
      },
    });
  });
});
