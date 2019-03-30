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

import { offsetRotate } from '../offsetRotate';

describe('offsetRotate', () => {
  it('should return a function', () => {
    const result = offsetRotate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `offsetRotate` as component and css prop', () => {
    const result = offsetRotate()({ offsetRotate: 'inherit' });
    expect(toStyles(result)).toEqual({ offsetRotate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = offsetRotate<'a'>()({ offsetRotate: 'a' });
    expect(toStyles(result)).toEqual({ offsetRotate: 'a' });
  });

  it('should use an interface which marks `offsetRotate` as optional', () => {
    const result = offsetRotate<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = offsetRotate<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ offsetRotate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offsetRotate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = offsetRotate<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      offsetRotate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offsetRotate: 'a',
      [MQ.D]: {
        offsetRotate: 'b',
      },
      [MQ.T]: {
        offsetRotate: 'c',
      },
      [MQ.M]: {
        offsetRotate: 'd',
      },
    });
  });
});
