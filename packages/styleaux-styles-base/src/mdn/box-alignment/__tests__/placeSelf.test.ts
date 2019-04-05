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

import { createPlaceSelf } from '../placeSelf';

describe('placeSelf', () => {
  it('should return a function', () => {
    const result = createPlaceSelf();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `placeSelf` as component and css prop', () => {
    const result = createPlaceSelf()({ placeSelf: 'inherit' });
    expect(toStyles(result)).toEqual({ placeSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPlaceSelf<'a'>()({ placeSelf: 'a' });
    expect(toStyles(result)).toEqual({ placeSelf: 'a' });
  });

  it('should use an interface which marks `placeSelf` as optional', () => {
    const result = createPlaceSelf<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPlaceSelf<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ placeSelf: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      placeSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPlaceSelf<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      placeSelf: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      placeSelf: 'a',
      [MQ.D]: {
        placeSelf: 'b',
      },
      [MQ.T]: {
        placeSelf: 'c',
      },
      [MQ.M]: {
        placeSelf: 'd',
      },
    });
  });
});
