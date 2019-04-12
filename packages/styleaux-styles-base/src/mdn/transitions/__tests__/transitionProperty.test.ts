import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTransitionProperty } from '../transitionProperty';

describe('createTransitionProperty', () => {
  it('should return a function', () => {
    const result = createTransitionProperty();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransitionProperty` as component and css prop', () => {
    const result = createTransitionProperty()({ transitionProperty: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionProperty: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransitionProperty<'a'>()({ transitionProperty: 'a' });
    expect(toStyles(result)).toEqual({ transitionProperty: 'a' });
  });

  it('should use an interface which marks `createTransitionProperty` as optional', () => {
    const result = createTransitionProperty<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransitionProperty<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transitionProperty: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transitionProperty: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransitionProperty<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      transitionProperty: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      transitionProperty: 'a',
      [MQ.D]: {
        transitionProperty: 'b',
      },
      [MQ.T]: {
        transitionProperty: 'c',
      },
      [MQ.M]: {
        transitionProperty: 'd',
      },
    });
  });
});
