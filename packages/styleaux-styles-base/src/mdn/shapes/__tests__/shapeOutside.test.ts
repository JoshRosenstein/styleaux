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

import { shapeOutside } from '../shapeOutside';

describe('shapeOutside', () => {
  it('should return a function', () => {
    const result = shapeOutside();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `shapeOutside` as component and css prop', () => {
    const result = shapeOutside()({ shapeOutside: 'inherit' });
    expect(toStyles(result)).toEqual({ shapeOutside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeOutside<'a'>()({ shapeOutside: 'a' });
    expect(toStyles(result)).toEqual({ shapeOutside: 'a' });
  });

  it('should use an interface which marks `shapeOutside` as optional', () => {
    const result = shapeOutside<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = shapeOutside<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ shapeOutside: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      shapeOutside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeOutside<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      shapeOutside: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      shapeOutside: 'a',
      [MQ.D]: {
        shapeOutside: 'b',
      },
      [MQ.T]: {
        shapeOutside: 'c',
      },
      [MQ.M]: {
        shapeOutside: 'd',
      },
    });
  });
});
