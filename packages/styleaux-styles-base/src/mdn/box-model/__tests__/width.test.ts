import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createWidth } from '../width';

describe('createWidth', () => {
  it('should return a function', () => {
    const result = createWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createWidth` as component and css prop', () => {
    const result = createWidth()({ width: 'inherit' });
    expect(toStyles(result)).toEqual({ width: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWidth<'a'>()({ width: 'a' });
    expect(toStyles(result)).toEqual({ width: 'a' });
  });

  it('should use an interface which marks `createWidth` as optional', () => {
    const result = createWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ width: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      width: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      width: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      width: 'a',
      [MQ.D]: {
        width: 'b',
      },
      [MQ.T]: {
        width: 'c',
      },
      [MQ.M]: {
        width: 'd',
      },
    });
  });
});
