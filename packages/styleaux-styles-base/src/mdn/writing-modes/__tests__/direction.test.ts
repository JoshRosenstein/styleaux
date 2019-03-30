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

import { direction } from '../direction';

describe('direction', () => {
  it('should return a function', () => {
    const result = direction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `direction` as component and css prop', () => {
    const result = direction()({ direction: 'inherit' });
    expect(toStyles(result)).toEqual({ direction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = direction<'a'>()({ direction: 'a' });
    expect(toStyles(result)).toEqual({ direction: 'a' });
  });

  it('should use an interface which marks `direction` as optional', () => {
    const result = direction<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = direction<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ direction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      direction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = direction<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      direction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      direction: 'a',
      [MQ.D]: {
        direction: 'b',
      },
      [MQ.T]: {
        direction: 'c',
      },
      [MQ.M]: {
        direction: 'd',
      },
    });
  });
});
