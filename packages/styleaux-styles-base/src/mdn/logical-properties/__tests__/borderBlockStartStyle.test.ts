import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderBlockStartStyle } from '../borderBlockStartStyle';

describe('createBorderBlockStartStyle', () => {
  it('should return a function', () => {
    const result = createBorderBlockStartStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockStartStyle` as component and css prop', () => {
    const result = createBorderBlockStartStyle()({ borderBlockStartStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockStartStyle<'a'>()({ borderBlockStartStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStartStyle: 'a' });
  });

  it('should use an interface which marks `createBorderBlockStartStyle` as optional', () => {
    const result = createBorderBlockStartStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockStartStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockStartStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockStartStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderBlockStartStyle: 'a',
      [MQ.D]: {
        borderBlockStartStyle: 'b',
      },
      [MQ.T]: {
        borderBlockStartStyle: 'c',
      },
      [MQ.M]: {
        borderBlockStartStyle: 'd',
      },
    });
  });
});
