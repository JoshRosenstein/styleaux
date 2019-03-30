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

import { flexBasis } from '../flexBasis';

describe('flexBasis', () => {
  it('should return a function', () => {
    const result = flexBasis();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flexBasis` as component and css prop', () => {
    const result = flexBasis()({ flexBasis: 'inherit' });
    expect(toStyles(result)).toEqual({ flexBasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexBasis<'a'>()({ flexBasis: 'a' });
    expect(toStyles(result)).toEqual({ flexBasis: 'a' });
  });

  it('should use an interface which marks `flexBasis` as optional', () => {
    const result = flexBasis<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = flexBasis<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexBasis: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexBasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexBasis<
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
