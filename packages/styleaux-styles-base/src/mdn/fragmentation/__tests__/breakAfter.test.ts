import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBreakAfter } from '../breakAfter';

describe('createBreakAfter', () => {
  it('should return a function', () => {
    const result = createBreakAfter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBreakAfter` as component and css prop', () => {
    const result = createBreakAfter()({ breakAfter: 'inherit' });
    expect(toStyles(result)).toEqual({ breakAfter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBreakAfter<'a'>()({ breakAfter: 'a' });
    expect(toStyles(result)).toEqual({ breakAfter: 'a' });
  });

  it('should use an interface which marks `createBreakAfter` as optional', () => {
    const result = createBreakAfter<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBreakAfter<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ breakAfter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      breakAfter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBreakAfter<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      breakAfter: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      breakAfter: 'a',
      [MQ.D]: {
        breakAfter: 'b',
      },
      [MQ.T]: {
        breakAfter: 'c',
      },
      [MQ.M]: {
        breakAfter: 'd',
      },
    });
  });
});
