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

import { outlineWidth } from '../outlineWidth';

describe('outlineWidth', () => {
  it('should return a function', () => {
    const result = outlineWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `outlineWidth` as component and css prop', () => {
    const result = outlineWidth()({ outlineWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineWidth<'a'>()({ outlineWidth: 'a' });
    expect(toStyles(result)).toEqual({ outlineWidth: 'a' });
  });

  it('should use an interface which marks `outlineWidth` as optional', () => {
    const result = outlineWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = outlineWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineWidth<
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
