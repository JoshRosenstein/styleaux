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

import { createGridTemplateAreas } from '../gridTemplateAreas';

describe('gridTemplateAreas', () => {
  it('should return a function', () => {
    const result = createGridTemplateAreas();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateAreas` as component and css prop', () => {
    const result = createGridTemplateAreas()({ gridTemplateAreas: 'inherit' });
    expect(toStyles(result)).toEqual({ gridTemplateAreas: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridTemplateAreas<'a'>()({ gridTemplateAreas: 'a' });
    expect(toStyles(result)).toEqual({ gridTemplateAreas: 'a' });
  });

  it('should use an interface which marks `gridTemplateAreas` as optional', () => {
    const result = createGridTemplateAreas<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridTemplateAreas<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridTemplateAreas: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplateAreas: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridTemplateAreas<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridTemplateAreas: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridTemplateAreas: 'a',
      [MQ.D]: {
        gridTemplateAreas: 'b',
      },
      [MQ.T]: {
        gridTemplateAreas: 'c',
      },
      [MQ.M]: {
        gridTemplateAreas: 'd',
      },
    });
  });
});
