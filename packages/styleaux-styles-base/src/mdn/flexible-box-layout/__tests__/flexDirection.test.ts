import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFlexDirection } from '../flexDirection';

describe('createFlexDirection', () => {
  it('should return a function', () => {
    const result = createFlexDirection();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlexDirection` as component and css prop', () => {
    const result = createFlexDirection()({ flexDirection: 'inherit' });
    expect(toStyles(result)).toEqual({ flexDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexDirection<'a'>()({ flexDirection: 'a' });
    expect(toStyles(result)).toEqual({ flexDirection: 'a' });
  });

  it('should use an interface which marks `createFlexDirection` as optional', () => {
    const result = createFlexDirection<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlexDirection<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexDirection: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexDirection<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      flexDirection: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      flexDirection: 'a',
      [MQ.D]: {
        flexDirection: 'b',
      },
      [MQ.T]: {
        flexDirection: 'c',
      },
      [MQ.M]: {
        flexDirection: 'd',
      },
    });
  });
});
