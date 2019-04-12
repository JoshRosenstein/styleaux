import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBoxSizing } from '../boxSizing';

describe('createBoxSizing', () => {
  it('should return a function', () => {
    const result = createBoxSizing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBoxSizing` as component and css prop', () => {
    const result = createBoxSizing()({ boxSizing: 'inherit' });
    expect(toStyles(result)).toEqual({ boxSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBoxSizing<'a'>()({ boxSizing: 'a' });
    expect(toStyles(result)).toEqual({ boxSizing: 'a' });
  });

  it('should use an interface which marks `createBoxSizing` as optional', () => {
    const result = createBoxSizing<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBoxSizing<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxSizing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBoxSizing<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      boxSizing: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      boxSizing: 'a',
      [MQ.D]: {
        boxSizing: 'b',
      },
      [MQ.T]: {
        boxSizing: 'c',
      },
      [MQ.M]: {
        boxSizing: 'd',
      },
    });
  });
});
