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

import { createTextOverflow } from '../textOverflow';

describe('textOverflow', () => {
  it('should return a function', () => {
    const result = createTextOverflow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textOverflow` as component and css prop', () => {
    const result = createTextOverflow()({ textOverflow: 'inherit' });
    expect(toStyles(result)).toEqual({ textOverflow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextOverflow<'a'>()({ textOverflow: 'a' });
    expect(toStyles(result)).toEqual({ textOverflow: 'a' });
  });

  it('should use an interface which marks `textOverflow` as optional', () => {
    const result = createTextOverflow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextOverflow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textOverflow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textOverflow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextOverflow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textOverflow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textOverflow: 'a',
      [MQ.D]: {
        textOverflow: 'b',
      },
      [MQ.T]: {
        textOverflow: 'c',
      },
      [MQ.M]: {
        textOverflow: 'd',
      },
    });
  });
});
