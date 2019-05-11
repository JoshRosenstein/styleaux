import { createTextAlign } from '../textAlign';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextAlign', () => {
  it('should return a function', () => {
    const result = createTextAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextAlign` as component and css prop', () => {
    const result = createTextAlign()({ textAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ textAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextAlign<'a'>()({ textAlign: 'a' });
    expect(toStyles(result)).toEqual({ textAlign: 'a' });
  });

  it('should use an interface which marks `createTextAlign` as optional', () => {
    const result = createTextAlign<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextAlign<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextAlign<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
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
