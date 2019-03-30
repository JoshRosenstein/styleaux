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

import { textAlign } from '../textAlign';

describe('textAlign', () => {
  it('should return a function', () => {
    const result = textAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textAlign` as component and css prop', () => {
    const result = textAlign()({ textAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ textAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlign<'a'>()({ textAlign: 'a' });
    expect(toStyles(result)).toEqual({ textAlign: 'a' });
  });

  it('should use an interface which marks `textAlign` as optional', () => {
    const result = textAlign<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textAlign<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlign<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textAlign: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textAlign: 'a',
      [MQ.D]: {
        textAlign: 'b',
      },
      [MQ.T]: {
        textAlign: 'c',
      },
      [MQ.M]: {
        textAlign: 'd',
      },
    });
  });
});
