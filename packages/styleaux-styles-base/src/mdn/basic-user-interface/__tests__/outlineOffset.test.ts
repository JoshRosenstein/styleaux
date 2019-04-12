import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOutlineOffset } from '../outlineOffset';

describe('createOutlineOffset', () => {
  it('should return a function', () => {
    const result = createOutlineOffset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOutlineOffset` as component and css prop', () => {
    const result = createOutlineOffset()({ outlineOffset: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineOffset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOutlineOffset<'a'>()({ outlineOffset: 'a' });
    expect(toStyles(result)).toEqual({ outlineOffset: 'a' });
  });

  it('should use an interface which marks `createOutlineOffset` as optional', () => {
    const result = createOutlineOffset<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOutlineOffset<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineOffset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineOffset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOutlineOffset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      outlineOffset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      outlineOffset: 'a',
      [MQ.D]: {
        outlineOffset: 'b',
      },
      [MQ.T]: {
        outlineOffset: 'c',
      },
      [MQ.M]: {
        outlineOffset: 'd',
      },
    });
  });
});
