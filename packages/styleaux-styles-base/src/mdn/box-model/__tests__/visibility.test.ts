import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createVisibility } from '../visibility';

describe('createVisibility', () => {
  it('should return a function', () => {
    const result = createVisibility();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createVisibility` as component and css prop', () => {
    const result = createVisibility()({ visibility: 'inherit' });
    expect(toStyles(result)).toEqual({ visibility: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createVisibility<'a'>()({ visibility: 'a' });
    expect(toStyles(result)).toEqual({ visibility: 'a' });
  });

  it('should use an interface which marks `createVisibility` as optional', () => {
    const result = createVisibility<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createVisibility<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ visibility: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      visibility: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createVisibility<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      visibility: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      visibility: 'a',
      [MQ.D]: {
        visibility: 'b',
      },
      [MQ.T]: {
        visibility: 'c',
      },
      [MQ.M]: {
        visibility: 'd',
      },
    });
  });
});
