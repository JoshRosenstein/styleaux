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

import { border } from '../border';

describe('border', () => {
  it('should return a function', () => {
    const result = border();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `border` as component and css prop', () => {
    const result = border()({ border: 'inherit' });
    expect(toStyles(result)).toEqual({ border: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = border<'a'>()({ border: 'a' });
    expect(toStyles(result)).toEqual({ border: 'a' });
  });

  it('should use an interface which marks `border` as optional', () => {
    const result = border<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = border<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ border: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      border: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = border<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      border: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      border: 'a',
      [MQ.D]: {
        border: 'b',
      },
      [MQ.T]: {
        border: 'c',
      },
      [MQ.M]: {
        border: 'd',
      },
    });
  });
});
