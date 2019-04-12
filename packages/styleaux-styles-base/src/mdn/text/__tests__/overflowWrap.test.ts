import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOverflowWrap } from '../overflowWrap';

describe('createOverflowWrap', () => {
  it('should return a function', () => {
    const result = createOverflowWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOverflowWrap` as component and css prop', () => {
    const result = createOverflowWrap()({ overflowWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOverflowWrap<'a'>()({ overflowWrap: 'a' });
    expect(toStyles(result)).toEqual({ overflowWrap: 'a' });
  });

  it('should use an interface which marks `createOverflowWrap` as optional', () => {
    const result = createOverflowWrap<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOverflowWrap<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOverflowWrap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      overflowWrap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      overflowWrap: 'a',
      [MQ.D]: {
        overflowWrap: 'b',
      },
      [MQ.T]: {
        overflowWrap: 'c',
      },
      [MQ.M]: {
        overflowWrap: 'd',
      },
    });
  });
});
