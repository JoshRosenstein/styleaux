import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOutline } from '../outline';

describe('createOutline', () => {
  it('should return a function', () => {
    const result = createOutline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOutline` as component and css prop', () => {
    const result = createOutline()({ outline: 'inherit' });
    expect(toStyles(result)).toEqual({ outline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOutline<'a'>()({ outline: 'a' });
    expect(toStyles(result)).toEqual({ outline: 'a' });
  });

  it('should use an interface which marks `createOutline` as optional', () => {
    const result = createOutline<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOutline<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOutline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      outline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      outline: 'a',
      [MQ.D]: {
        outline: 'b',
      },
      [MQ.T]: {
        outline: 'c',
      },
      [MQ.M]: {
        outline: 'd',
      },
    });
  });
});
