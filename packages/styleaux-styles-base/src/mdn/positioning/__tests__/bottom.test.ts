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

import { createBottom } from '../bottom';

describe('bottom', () => {
  it('should return a function', () => {
    const result = createBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `bottom` as component and css prop', () => {
    const result = createBottom()({ bottom: 'inherit' });
    expect(toStyles(result)).toEqual({ bottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBottom<'a'>()({ bottom: 'a' });
    expect(toStyles(result)).toEqual({ bottom: 'a' });
  });

  it('should use an interface which marks `bottom` as optional', () => {
    const result = createBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ bottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      bottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      bottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      bottom: 'a',
      [MQ.D]: {
        bottom: 'b',
      },
      [MQ.T]: {
        bottom: 'c',
      },
      [MQ.M]: {
        bottom: 'd',
      },
    });
  });
});
