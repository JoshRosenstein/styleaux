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

import { createBoxShadow } from '../boxShadow';

describe('boxShadow', () => {
  it('should return a function', () => {
    const result = createBoxShadow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `boxShadow` as component and css prop', () => {
    const result = createBoxShadow()({ boxShadow: 'inherit' });
    expect(toStyles(result)).toEqual({ boxShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBoxShadow<'a'>()({ boxShadow: 'a' });
    expect(toStyles(result)).toEqual({ boxShadow: 'a' });
  });

  it('should use an interface which marks `boxShadow` as optional', () => {
    const result = createBoxShadow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBoxShadow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxShadow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBoxShadow<
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
