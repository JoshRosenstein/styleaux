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

import { createTransformBox } from '../transformBox';

describe('transformBox', () => {
  it('should return a function', () => {
    const result = createTransformBox();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transformBox` as component and css prop', () => {
    const result = createTransformBox()({ transformBox: 'inherit' });
    expect(toStyles(result)).toEqual({ transformBox: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransformBox<'a'>()({ transformBox: 'a' });
    expect(toStyles(result)).toEqual({ transformBox: 'a' });
  });

  it('should use an interface which marks `transformBox` as optional', () => {
    const result = createTransformBox<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTransformBox<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transformBox: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transformBox: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransformBox<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transformBox: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transformBox: 'a',
      [MQ.D]: {
        transformBox: 'b',
      },
      [MQ.T]: {
        transformBox: 'c',
      },
      [MQ.M]: {
        transformBox: 'd',
      },
    });
  });
});
