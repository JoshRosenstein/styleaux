import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOutlineWidth } from '../outlineWidth';

describe('createOutlineWidth', () => {
  it('should return a function', () => {
    const result = createOutlineWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOutlineWidth` as component and css prop', () => {
    const result = createOutlineWidth()({ outlineWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOutlineWidth<'a'>()({ outlineWidth: 'a' });
    expect(toStyles(result)).toEqual({ outlineWidth: 'a' });
  });

  it('should use an interface which marks `createOutlineWidth` as optional', () => {
    const result = createOutlineWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOutlineWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOutlineWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      outlineWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      outlineWidth: 'a',
      [MQ.D]: {
        outlineWidth: 'b',
      },
      [MQ.T]: {
        outlineWidth: 'c',
      },
      [MQ.M]: {
        outlineWidth: 'd',
      },
    });
  });
});
