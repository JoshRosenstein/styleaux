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

import { shapeMargin } from '../shapeMargin';

describe('shapeMargin', () => {
  it('should return a function', () => {
    const result = shapeMargin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `shapeMargin` as component and css prop', () => {
    const result = shapeMargin()({ shapeMargin: 'inherit' });
    expect(toStyles(result)).toEqual({ shapeMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeMargin<'a'>()({ shapeMargin: 'a' });
    expect(toStyles(result)).toEqual({ shapeMargin: 'a' });
  });

  it('should use an interface which marks `shapeMargin` as optional', () => {
    const result = shapeMargin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = shapeMargin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ shapeMargin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      shapeMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeMargin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      shapeMargin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      shapeMargin: 'a',
      [MQ.D]: {
        shapeMargin: 'b',
      },
      [MQ.T]: {
        shapeMargin: 'c',
      },
      [MQ.M]: {
        shapeMargin: 'd',
      },
    });
  });
});
