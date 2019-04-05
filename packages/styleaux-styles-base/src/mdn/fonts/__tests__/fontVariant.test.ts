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

import { createFontVariant } from '../fontVariant';

describe('fontVariant', () => {
  it('should return a function', () => {
    const result = createFontVariant();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariant` as component and css prop', () => {
    const result = createFontVariant()({ fontVariant: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariant: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariant<'a'>()({ fontVariant: 'a' });
    expect(toStyles(result)).toEqual({ fontVariant: 'a' });
  });

  it('should use an interface which marks `fontVariant` as optional', () => {
    const result = createFontVariant<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFontVariant<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariant: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariant: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariant<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariant: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariant: 'a',
      [MQ.D]: {
        fontVariant: 'b',
      },
      [MQ.T]: {
        fontVariant: 'c',
      },
      [MQ.M]: {
        fontVariant: 'd',
      },
    });
  });
});
