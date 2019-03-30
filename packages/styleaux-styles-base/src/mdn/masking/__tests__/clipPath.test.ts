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

import { clipPath } from '../clipPath';

describe('clipPath', () => {
  it('should return a function', () => {
    const result = clipPath();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `clipPath` as component and css prop', () => {
    const result = clipPath()({ clipPath: 'inherit' });
    expect(toStyles(result)).toEqual({ clipPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clipPath<'a'>()({ clipPath: 'a' });
    expect(toStyles(result)).toEqual({ clipPath: 'a' });
  });

  it('should use an interface which marks `clipPath` as optional', () => {
    const result = clipPath<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = clipPath<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ clipPath: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      clipPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clipPath<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      clipPath: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      clipPath: 'a',
      [MQ.D]: {
        clipPath: 'b',
      },
      [MQ.T]: {
        clipPath: 'c',
      },
      [MQ.M]: {
        clipPath: 'd',
      },
    });
  });
});
