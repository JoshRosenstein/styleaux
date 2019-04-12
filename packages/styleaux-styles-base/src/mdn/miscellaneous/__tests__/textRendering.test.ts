import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextRendering } from '../textRendering';

describe('createTextRendering', () => {
  it('should return a function', () => {
    const result = createTextRendering();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextRendering` as component and css prop', () => {
    const result = createTextRendering()({ textRendering: 'inherit' });
    expect(toStyles(result)).toEqual({ textRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextRendering<'a'>()({ textRendering: 'a' });
    expect(toStyles(result)).toEqual({ textRendering: 'a' });
  });

  it('should use an interface which marks `createTextRendering` as optional', () => {
    const result = createTextRendering<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextRendering<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textRendering: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextRendering<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textRendering: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textRendering: 'a',
      [MQ.D]: {
        textRendering: 'b',
      },
      [MQ.T]: {
        textRendering: 'c',
      },
      [MQ.M]: {
        textRendering: 'd',
      },
    });
  });
});
