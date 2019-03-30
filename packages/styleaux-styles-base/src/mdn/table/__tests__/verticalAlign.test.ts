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

import { verticalAlign } from '../verticalAlign';

describe('verticalAlign', () => {
  it('should return a function', () => {
    const result = verticalAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `verticalAlign` as component and css prop', () => {
    const result = verticalAlign()({ verticalAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ verticalAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = verticalAlign<'a'>()({ verticalAlign: 'a' });
    expect(toStyles(result)).toEqual({ verticalAlign: 'a' });
  });

  it('should use an interface which marks `verticalAlign` as optional', () => {
    const result = verticalAlign<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = verticalAlign<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ verticalAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      verticalAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = verticalAlign<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      verticalAlign: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      verticalAlign: 'a',
      [MQ.D]: {
        verticalAlign: 'b',
      },
      [MQ.T]: {
        verticalAlign: 'c',
      },
      [MQ.M]: {
        verticalAlign: 'd',
      },
    });
  });
});
