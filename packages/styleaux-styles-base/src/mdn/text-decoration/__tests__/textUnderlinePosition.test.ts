import { createTextUnderlinePosition } from '../textUnderlinePosition';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextUnderlinePosition', () => {
  it('should return a function', () => {
    const result = createTextUnderlinePosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextUnderlinePosition` as component and css prop', () => {
    const result = createTextUnderlinePosition()({
      textUnderlinePosition: 'inherit',
    });
    expect(toStyles(result)).toEqual({ textUnderlinePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextUnderlinePosition<'a'>()({
      textUnderlinePosition: 'a',
    });
    expect(toStyles(result)).toEqual({ textUnderlinePosition: 'a' });
  });

  it('should use an interface which marks `createTextUnderlinePosition` as optional', () => {
    const result = createTextUnderlinePosition<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextUnderlinePosition<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textUnderlinePosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textUnderlinePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextUnderlinePosition<
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
