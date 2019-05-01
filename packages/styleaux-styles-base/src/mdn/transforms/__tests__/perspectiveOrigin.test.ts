import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createPerspectiveOrigin } from '../perspectiveOrigin';

describe('createPerspectiveOrigin', () => {
  it('should return a function', () => {
    const result = createPerspectiveOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPerspectiveOrigin` as component and css prop', () => {
    const result = createPerspectiveOrigin()({ perspectiveOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ perspectiveOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPerspectiveOrigin<'a'>()({ perspectiveOrigin: 'a' });
    expect(toStyles(result)).toEqual({ perspectiveOrigin: 'a' });
  });

  it('should use an interface which marks `createPerspectiveOrigin` as optional', () => {
    const result = createPerspectiveOrigin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPerspectiveOrigin<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ perspectiveOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      perspectiveOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPerspectiveOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      perspectiveOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      perspectiveOrigin: 'a',
      [MQ.D]: {
        perspectiveOrigin: 'b',
      },
      [MQ.T]: {
        perspectiveOrigin: 'c',
      },
      [MQ.M]: {
        perspectiveOrigin: 'd',
      },
    });
  });
});
