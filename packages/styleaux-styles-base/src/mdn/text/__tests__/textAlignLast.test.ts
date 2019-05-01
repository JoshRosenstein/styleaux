import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextAlignLast } from '../textAlignLast';

describe('createTextAlignLast', () => {
  it('should return a function', () => {
    const result = createTextAlignLast();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextAlignLast` as component and css prop', () => {
    const result = createTextAlignLast()({ textAlignLast: 'inherit' });
    expect(toStyles(result)).toEqual({ textAlignLast: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextAlignLast<'a'>()({ textAlignLast: 'a' });
    expect(toStyles(result)).toEqual({ textAlignLast: 'a' });
  });

  it('should use an interface which marks `createTextAlignLast` as optional', () => {
    const result = createTextAlignLast<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextAlignLast<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textAlignLast: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textAlignLast: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextAlignLast<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textAlignLast: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textAlignLast: 'a',
      [MQ.D]: {
        textAlignLast: 'b',
      },
      [MQ.T]: {
        textAlignLast: 'c',
      },
      [MQ.M]: {
        textAlignLast: 'd',
      },
    });
  });
});
