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

import { createObjectPosition } from '../objectPosition';

describe('objectPosition', () => {
  it('should return a function', () => {
    const result = createObjectPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `objectPosition` as component and css prop', () => {
    const result = createObjectPosition()({ objectPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ objectPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createObjectPosition<'a'>()({ objectPosition: 'a' });
    expect(toStyles(result)).toEqual({ objectPosition: 'a' });
  });

  it('should use an interface which marks `objectPosition` as optional', () => {
    const result = createObjectPosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createObjectPosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ objectPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      objectPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createObjectPosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      objectPosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      objectPosition: 'a',
      [MQ.D]: {
        objectPosition: 'b',
      },
      [MQ.T]: {
        objectPosition: 'c',
      },
      [MQ.M]: {
        objectPosition: 'd',
      },
    });
  });
});
