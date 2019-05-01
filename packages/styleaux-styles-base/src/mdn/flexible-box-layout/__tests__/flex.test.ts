import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFlex } from '../flex';

describe('createFlex', () => {
  it('should return a function', () => {
    const result = createFlex();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlex` as component and css prop', () => {
    const result = createFlex()({ flex: 'inherit' });
    expect(toStyles(result)).toEqual({ flex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlex<'a'>()({ flex: 'a' });
    expect(toStyles(result)).toEqual({ flex: 'a' });
  });

  it('should use an interface which marks `createFlex` as optional', () => {
    const result = createFlex<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlex<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flex: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlex<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      flex: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      flex: 'a',
      [MQ.D]: {
        flex: 'b',
      },
      [MQ.T]: {
        flex: 'c',
      },
      [MQ.M]: {
        flex: 'd',
      },
    });
  });
});
