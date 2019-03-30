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

import { alignSelf } from '../alignSelf';

describe('alignSelf', () => {
  it('should return a function', () => {
    const result = alignSelf();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `alignSelf` as component and css prop', () => {
    const result = alignSelf()({ alignSelf: 'inherit' });
    expect(toStyles(result)).toEqual({ alignSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignSelf<'a'>()({ alignSelf: 'a' });
    expect(toStyles(result)).toEqual({ alignSelf: 'a' });
  });

  it('should use an interface which marks `alignSelf` as optional', () => {
    const result = alignSelf<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = alignSelf<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignSelf: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignSelf<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      alignSelf: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      alignSelf: 'a',
      [MQ.D]: {
        alignSelf: 'b',
      },
      [MQ.T]: {
        alignSelf: 'c',
      },
      [MQ.M]: {
        alignSelf: 'd',
      },
    });
  });
});
