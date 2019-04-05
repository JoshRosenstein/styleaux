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

import { createTextTransform } from '../textTransform';

describe('textTransform', () => {
  it('should return a function', () => {
    const result = createTextTransform();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textTransform` as component and css prop', () => {
    const result = createTextTransform()({ textTransform: 'inherit' });
    expect(toStyles(result)).toEqual({ textTransform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextTransform<'a'>()({ textTransform: 'a' });
    expect(toStyles(result)).toEqual({ textTransform: 'a' });
  });

  it('should use an interface which marks `textTransform` as optional', () => {
    const result = createTextTransform<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextTransform<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textTransform: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textTransform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextTransform<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textTransform: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textTransform: 'a',
      [MQ.D]: {
        textTransform: 'b',
      },
      [MQ.T]: {
        textTransform: 'c',
      },
      [MQ.M]: {
        textTransform: 'd',
      },
    });
  });
});
