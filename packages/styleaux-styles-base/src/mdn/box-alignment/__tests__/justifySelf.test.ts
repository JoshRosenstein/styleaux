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

import { justifySelf } from '../justifySelf';

describe('justifySelf', () => {
  it('should return a function', () => {
    const result = justifySelf();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `justifySelf` as component and css prop', () => {
    const result = justifySelf()({ justifySelf: 'inherit' });
    expect(toStyles(result)).toEqual({ justifySelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifySelf<'a'>()({ justifySelf: 'a' });
    expect(toStyles(result)).toEqual({ justifySelf: 'a' });
  });

  it('should use an interface which marks `justifySelf` as optional', () => {
    const result = justifySelf<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = justifySelf<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ justifySelf: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      justifySelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifySelf<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      justifySelf: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      justifySelf: 'a',
      [MQ.D]: {
        justifySelf: 'b',
      },
      [MQ.T]: {
        justifySelf: 'c',
      },
      [MQ.M]: {
        justifySelf: 'd',
      },
    });
  });
});
