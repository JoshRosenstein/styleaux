import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createPadding } from '../padding';

describe('createPadding', () => {
  it('should return a function', () => {
    const result = createPadding();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPadding` as component and css prop', () => {
    const result = createPadding()({ padding: 'inherit' });
    expect(toStyles(result)).toEqual({ padding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPadding<'a'>()({ padding: 'a' });
    expect(toStyles(result)).toEqual({ padding: 'a' });
  });

  it('should use an interface which marks `createPadding` as optional', () => {
    const result = createPadding<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPadding<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ padding: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      padding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPadding<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      padding: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      padding: 'a',
      [MQ.D]: {
        padding: 'b',
      },
      [MQ.T]: {
        padding: 'c',
      },
      [MQ.M]: {
        padding: 'd',
      },
    });
  });
});
