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

import { createShapeImageThreshold } from '../shapeImageThreshold';

describe('shapeImageThreshold', () => {
  it('should return a function', () => {
    const result = createShapeImageThreshold();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `shapeImageThreshold` as component and css prop', () => {
    const result = createShapeImageThreshold()({ shapeImageThreshold: 'inherit' });
    expect(toStyles(result)).toEqual({ shapeImageThreshold: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createShapeImageThreshold<'a'>()({ shapeImageThreshold: 'a' });
    expect(toStyles(result)).toEqual({ shapeImageThreshold: 'a' });
  });

  it('should use an interface which marks `shapeImageThreshold` as optional', () => {
    const result = createShapeImageThreshold<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createShapeImageThreshold<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ shapeImageThreshold: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      shapeImageThreshold: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createShapeImageThreshold<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      shapeImageThreshold: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      shapeImageThreshold: 'a',
      [MQ.D]: {
        shapeImageThreshold: 'b',
      },
      [MQ.T]: {
        shapeImageThreshold: 'c',
      },
      [MQ.M]: {
        shapeImageThreshold: 'd',
      },
    });
  });
});
