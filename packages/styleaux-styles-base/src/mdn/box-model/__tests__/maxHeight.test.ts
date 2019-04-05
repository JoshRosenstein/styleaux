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

import { createMaxHeight } from '../maxHeight';

describe('maxHeight', () => {
  it('should return a function', () => {
    const result = createMaxHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maxHeight` as component and css prop', () => {
    const result = createMaxHeight()({ maxHeight: 'inherit' });
    expect(toStyles(result)).toEqual({ maxHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaxHeight<'a'>()({ maxHeight: 'a' });
    expect(toStyles(result)).toEqual({ maxHeight: 'a' });
  });

  it('should use an interface which marks `maxHeight` as optional', () => {
    const result = createMaxHeight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMaxHeight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maxHeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaxHeight<
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
