import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createMinHeight } from '../minHeight';

describe('createMinHeight', () => {
  it('should return a function', () => {
    const result = createMinHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMinHeight` as component and css prop', () => {
    const result = createMinHeight()({ minHeight: 'inherit' });
    expect(toStyles(result)).toEqual({ minHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMinHeight<'a'>()({ minHeight: 'a' });
    expect(toStyles(result)).toEqual({ minHeight: 'a' });
  });

  it('should use an interface which marks `createMinHeight` as optional', () => {
    const result = createMinHeight<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMinHeight<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minHeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMinHeight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      minHeight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      minHeight: 'a',
      [MQ.D]: {
        minHeight: 'b',
      },
      [MQ.T]: {
        minHeight: 'c',
      },
      [MQ.M]: {
        minHeight: 'd',
      },
    });
  });
});
