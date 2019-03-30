import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { gridTemplate } from '../gridTemplate';

describe('gridTemplate', () => {
  it('should return a function', () => {
    const result = gridTemplate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridTemplate` as component and css prop', () => {
    const result = gridTemplate()({ gridTemplate: 'inherit' });
    expect(toStyles(result)).toEqual({ gridTemplate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplate<'a'>()({ gridTemplate: 'a' });
    expect(toStyles(result)).toEqual({ gridTemplate: 'a' });
  });

  it('should use an interface which marks `gridTemplate` as optional', () => {
    const result = gridTemplate<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridTemplate<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridTemplate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplate<
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
