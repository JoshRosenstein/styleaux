import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createEmptyCells } from '../emptyCells';

describe('createEmptyCells', () => {
  it('should return a function', () => {
    const result = createEmptyCells();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createEmptyCells` as component and css prop', () => {
    const result = createEmptyCells()({ emptyCells: 'inherit' });
    expect(toStyles(result)).toEqual({ emptyCells: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createEmptyCells<'a'>()({ emptyCells: 'a' });
    expect(toStyles(result)).toEqual({ emptyCells: 'a' });
  });

  it('should use an interface which marks `createEmptyCells` as optional', () => {
    const result = createEmptyCells<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createEmptyCells<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ emptyCells: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      emptyCells: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createEmptyCells<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      emptyCells: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      emptyCells: 'a',
      [MQ.D]: {
        emptyCells: 'b',
      },
      [MQ.T]: {
        emptyCells: 'c',
      },
      [MQ.M]: {
        emptyCells: 'd',
      },
    });
  });
});
