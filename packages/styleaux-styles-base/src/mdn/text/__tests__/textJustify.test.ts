import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextJustify } from '../textJustify';

describe('createTextJustify', () => {
  it('should return a function', () => {
    const result = createTextJustify();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextJustify` as component and css prop', () => {
    const result = createTextJustify()({ textJustify: 'inherit' });
    expect(toStyles(result)).toEqual({ textJustify: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextJustify<'a'>()({ textJustify: 'a' });
    expect(toStyles(result)).toEqual({ textJustify: 'a' });
  });

  it('should use an interface which marks `createTextJustify` as optional', () => {
    const result = createTextJustify<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextJustify<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textJustify: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textJustify: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextJustify<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textJustify: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textJustify: 'a',
      [MQ.D]: {
        textJustify: 'b',
      },
      [MQ.T]: {
        textJustify: 'c',
      },
      [MQ.M]: {
        textJustify: 'd',
      },
    });
  });
});
