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

import { flexWrap } from '../flexWrap';

describe('flexWrap', () => {
  it('should return a function', () => {
    const result = flexWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flexWrap` as component and css prop', () => {
    const result = flexWrap()({ flexWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ flexWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexWrap<'a'>()({ flexWrap: 'a' });
    expect(toStyles(result)).toEqual({ flexWrap: 'a' });
  });

  it('should use an interface which marks `flexWrap` as optional', () => {
    const result = flexWrap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = flexWrap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexWrap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      flexWrap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexWrap: 'a',
      [MQ.D]: {
        flexWrap: 'b',
      },
      [MQ.T]: {
        flexWrap: 'c',
      },
      [MQ.M]: {
        flexWrap: 'd',
      },
    });
  });
});
