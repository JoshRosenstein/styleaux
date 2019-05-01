import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createGridTemplate } from '../gridTemplate';

describe('createGridTemplate', () => {
  it('should return a function', () => {
    const result = createGridTemplate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridTemplate` as component and css prop', () => {
    const result = createGridTemplate()({ gridTemplate: 'inherit' });
    expect(toStyles(result)).toEqual({ gridTemplate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridTemplate<'a'>()({ gridTemplate: 'a' });
    expect(toStyles(result)).toEqual({ gridTemplate: 'a' });
  });

  it('should use an interface which marks `createGridTemplate` as optional', () => {
    const result = createGridTemplate<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridTemplate<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridTemplate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridTemplate<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      gridTemplate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      gridTemplate: 'a',
      [MQ.D]: {
        gridTemplate: 'b',
      },
      [MQ.T]: {
        gridTemplate: 'c',
      },
      [MQ.M]: {
        gridTemplate: 'd',
      },
    });
  });
});
