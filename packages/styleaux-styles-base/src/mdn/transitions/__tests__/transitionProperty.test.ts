import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { transitionProperty } from '../transitionProperty';

describe('transitionProperty', () => {
  it('should return a function', () => {
    const result = transitionProperty();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transitionProperty` as component and css prop', () => {
    const result = transitionProperty()({ transitionProperty: 'inherit' });
    expect(toStyles(result)).toEqual({ transitionProperty: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionProperty<'a'>()({ transitionProperty: 'a' });
    expect(toStyles(result)).toEqual({ transitionProperty: 'a' });
  });

  it('should use an interface which marks `transitionProperty` as optional', () => {
    const result = transitionProperty<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = transitionProperty<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transitionProperty: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transitionProperty: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionProperty<
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
