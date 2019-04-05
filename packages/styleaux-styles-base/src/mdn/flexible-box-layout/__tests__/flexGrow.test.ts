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

import { createFlexGrow } from '../flexGrow';

describe('flexGrow', () => {
  it('should return a function', () => {
    const result = createFlexGrow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flexGrow` as component and css prop', () => {
    const result = createFlexGrow()({ flexGrow: 'inherit' });
    expect(toStyles(result)).toEqual({ flexGrow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexGrow<'a'>()({ flexGrow: 'a' });
    expect(toStyles(result)).toEqual({ flexGrow: 'a' });
  });

  it('should use an interface which marks `flexGrow` as optional', () => {
    const result = createFlexGrow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFlexGrow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexGrow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexGrow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexGrow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      flexGrow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexGrow: 'a',
      [MQ.D]: {
        flexGrow: 'b',
      },
      [MQ.T]: {
        flexGrow: 'c',
      },
      [MQ.M]: {
        flexGrow: 'd',
      },
    });
  });
});
