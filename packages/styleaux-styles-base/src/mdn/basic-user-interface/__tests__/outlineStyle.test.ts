import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOutlineStyle } from '../outlineStyle';

describe('createOutlineStyle', () => {
  it('should return a function', () => {
    const result = createOutlineStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOutlineStyle` as component and css prop', () => {
    const result = createOutlineStyle()({ outlineStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOutlineStyle<'a'>()({ outlineStyle: 'a' });
    expect(toStyles(result)).toEqual({ outlineStyle: 'a' });
  });

  it('should use an interface which marks `createOutlineStyle` as optional', () => {
    const result = createOutlineStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOutlineStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOutlineStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      outlineStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      outlineStyle: 'a',
      [MQ.D]: {
        outlineStyle: 'b',
      },
      [MQ.T]: {
        outlineStyle: 'c',
      },
      [MQ.M]: {
        outlineStyle: 'd',
      },
    });
  });
});
