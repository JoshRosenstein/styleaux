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

import { textUnderlinePosition } from '../textUnderlinePosition';

describe('textUnderlinePosition', () => {
  it('should return a function', () => {
    const result = textUnderlinePosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textUnderlinePosition` as component and css prop', () => {
    const result = textUnderlinePosition()({ textUnderlinePosition: 'inherit' });
    expect(toStyles(result)).toEqual({ textUnderlinePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textUnderlinePosition<'a'>()({ textUnderlinePosition: 'a' });
    expect(toStyles(result)).toEqual({ textUnderlinePosition: 'a' });
  });

  it('should use an interface which marks `textUnderlinePosition` as optional', () => {
    const result = textUnderlinePosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textUnderlinePosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textUnderlinePosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textUnderlinePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textUnderlinePosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textUnderlinePosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textUnderlinePosition: 'a',
      [MQ.D]: {
        textUnderlinePosition: 'b',
      },
      [MQ.T]: {
        textUnderlinePosition: 'c',
      },
      [MQ.M]: {
        textUnderlinePosition: 'd',
      },
    });
  });
});
