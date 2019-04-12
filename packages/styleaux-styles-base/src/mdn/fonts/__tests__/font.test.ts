import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFont } from '../font';

describe('createFont', () => {
  it('should return a function', () => {
    const result = createFont();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFont` as component and css prop', () => {
    const result = createFont()({ font: 'inherit' });
    expect(toStyles(result)).toEqual({ font: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFont<'a'>()({ font: 'a' });
    expect(toStyles(result)).toEqual({ font: 'a' });
  });

  it('should use an interface which marks `createFont` as optional', () => {
    const result = createFont<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFont<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ font: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      font: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFont<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      font: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      font: 'a',
      [MQ.D]: {
        font: 'b',
      },
      [MQ.T]: {
        font: 'c',
      },
      [MQ.M]: {
        font: 'd',
      },
    });
  });
});
