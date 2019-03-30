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

import { boxShadow } from '../boxShadow';

describe('boxShadow', () => {
  it('should return a function', () => {
    const result = boxShadow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `boxShadow` as component and css prop', () => {
    const result = boxShadow()({ boxShadow: 'inherit' });
    expect(toStyles(result)).toEqual({ boxShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxShadow<'a'>()({ boxShadow: 'a' });
    expect(toStyles(result)).toEqual({ boxShadow: 'a' });
  });

  it('should use an interface which marks `boxShadow` as optional', () => {
    const result = boxShadow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = boxShadow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxShadow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxShadow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      boxShadow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      boxShadow: 'a',
      [MQ.D]: {
        boxShadow: 'b',
      },
      [MQ.T]: {
        boxShadow: 'c',
      },
      [MQ.M]: {
        boxShadow: 'd',
      },
    });
  });
});
