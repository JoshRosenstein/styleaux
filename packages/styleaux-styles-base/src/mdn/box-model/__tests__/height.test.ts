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

import { height } from '../height';

describe('height', () => {
  it('should return a function', () => {
    const result = height();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `height` as component and css prop', () => {
    const result = height()({ height: 'inherit' });
    expect(toStyles(result)).toEqual({ height: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = height<'a'>()({ height: 'a' });
    expect(toStyles(result)).toEqual({ height: 'a' });
  });

  it('should use an interface which marks `height` as optional', () => {
    const result = height<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = height<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ height: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      height: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = height<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      height: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      height: 'a',
      [MQ.D]: {
        height: 'b',
      },
      [MQ.T]: {
        height: 'c',
      },
      [MQ.M]: {
        height: 'd',
      },
    });
  });
});
