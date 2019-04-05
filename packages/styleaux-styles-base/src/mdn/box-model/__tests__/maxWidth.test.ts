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

import { createMaxWidth } from '../maxWidth';

describe('maxWidth', () => {
  it('should return a function', () => {
    const result = createMaxWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maxWidth` as component and css prop', () => {
    const result = createMaxWidth()({ maxWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ maxWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaxWidth<'a'>()({ maxWidth: 'a' });
    expect(toStyles(result)).toEqual({ maxWidth: 'a' });
  });

  it('should use an interface which marks `maxWidth` as optional', () => {
    const result = createMaxWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMaxWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maxWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaxWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maxWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maxWidth: 'a',
      [MQ.D]: {
        maxWidth: 'b',
      },
      [MQ.T]: {
        maxWidth: 'c',
      },
      [MQ.M]: {
        maxWidth: 'd',
      },
    });
  });
});
