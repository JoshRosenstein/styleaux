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

import { maxHeight } from '../maxHeight';

describe('maxHeight', () => {
  it('should return a function', () => {
    const result = maxHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maxHeight` as component and css prop', () => {
    const result = maxHeight()({ maxHeight: 'inherit' });
    expect(toStyles(result)).toEqual({ maxHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxHeight<'a'>()({ maxHeight: 'a' });
    expect(toStyles(result)).toEqual({ maxHeight: 'a' });
  });

  it('should use an interface which marks `maxHeight` as optional', () => {
    const result = maxHeight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maxHeight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maxHeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxHeight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maxHeight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maxHeight: 'a',
      [MQ.D]: {
        maxHeight: 'b',
      },
      [MQ.T]: {
        maxHeight: 'c',
      },
      [MQ.M]: {
        maxHeight: 'd',
      },
    });
  });
});
