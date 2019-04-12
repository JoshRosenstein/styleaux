import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTranslate } from '../translate';

describe('createTranslate', () => {
  it('should return a function', () => {
    const result = createTranslate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTranslate` as component and css prop', () => {
    const result = createTranslate()({ translate: 'inherit' });
    expect(toStyles(result)).toEqual({ translate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTranslate<'a'>()({ translate: 'a' });
    expect(toStyles(result)).toEqual({ translate: 'a' });
  });

  it('should use an interface which marks `createTranslate` as optional', () => {
    const result = createTranslate<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTranslate<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ translate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      translate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTranslate<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      translate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      translate: 'a',
      [MQ.D]: {
        translate: 'b',
      },
      [MQ.T]: {
        translate: 'c',
      },
      [MQ.M]: {
        translate: 'd',
      },
    });
  });
});
