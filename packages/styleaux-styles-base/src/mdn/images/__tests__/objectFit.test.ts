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

import { objectFit } from '../objectFit';

describe('objectFit', () => {
  it('should return a function', () => {
    const result = objectFit();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `objectFit` as component and css prop', () => {
    const result = objectFit()({ objectFit: 'inherit' });
    expect(toStyles(result)).toEqual({ objectFit: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = objectFit<'a'>()({ objectFit: 'a' });
    expect(toStyles(result)).toEqual({ objectFit: 'a' });
  });

  it('should use an interface which marks `objectFit` as optional', () => {
    const result = objectFit<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = objectFit<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ objectFit: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      objectFit: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = objectFit<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      objectFit: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      objectFit: 'a',
      [MQ.D]: {
        objectFit: 'b',
      },
      [MQ.T]: {
        objectFit: 'c',
      },
      [MQ.M]: {
        objectFit: 'd',
      },
    });
  });
});