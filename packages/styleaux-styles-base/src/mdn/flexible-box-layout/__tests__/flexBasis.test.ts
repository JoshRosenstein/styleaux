import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFlexBasis } from '../flexBasis';

describe('createFlexBasis', () => {
  it('should return a function', () => {
    const result = createFlexBasis();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlexBasis` as component and css prop', () => {
    const result = createFlexBasis()({ flexBasis: 'inherit' });
    expect(toStyles(result)).toEqual({ flexBasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexBasis<'a'>()({ flexBasis: 'a' });
    expect(toStyles(result)).toEqual({ flexBasis: 'a' });
  });

  it('should use an interface which marks `createFlexBasis` as optional', () => {
    const result = createFlexBasis<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlexBasis<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexBasis: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexBasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexBasis<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      flexBasis: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      flexBasis: 'a',
      [MQ.D]: {
        flexBasis: 'b',
      },
      [MQ.T]: {
        flexBasis: 'c',
      },
      [MQ.M]: {
        flexBasis: 'd',
      },
    });
  });
});
