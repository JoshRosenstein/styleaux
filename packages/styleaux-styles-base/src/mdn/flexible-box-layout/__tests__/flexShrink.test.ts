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

import { createFlexShrink } from '../flexShrink';

describe('flexShrink', () => {
  it('should return a function', () => {
    const result = createFlexShrink();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flexShrink` as component and css prop', () => {
    const result = createFlexShrink()({ flexShrink: 'inherit' });
    expect(toStyles(result)).toEqual({ flexShrink: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexShrink<'a'>()({ flexShrink: 'a' });
    expect(toStyles(result)).toEqual({ flexShrink: 'a' });
  });

  it('should use an interface which marks `flexShrink` as optional', () => {
    const result = createFlexShrink<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFlexShrink<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexShrink: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexShrink: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexShrink<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      flexShrink: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexShrink: 'a',
      [MQ.D]: {
        flexShrink: 'b',
      },
      [MQ.T]: {
        flexShrink: 'c',
      },
      [MQ.M]: {
        flexShrink: 'd',
      },
    });
  });
});
