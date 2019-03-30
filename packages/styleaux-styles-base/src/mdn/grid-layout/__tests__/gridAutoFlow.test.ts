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

import { gridAutoFlow } from '../gridAutoFlow';

describe('gridAutoFlow', () => {
  it('should return a function', () => {
    const result = gridAutoFlow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridAutoFlow` as component and css prop', () => {
    const result = gridAutoFlow()({ gridAutoFlow: 'inherit' });
    expect(toStyles(result)).toEqual({ gridAutoFlow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoFlow<'a'>()({ gridAutoFlow: 'a' });
    expect(toStyles(result)).toEqual({ gridAutoFlow: 'a' });
  });

  it('should use an interface which marks `gridAutoFlow` as optional', () => {
    const result = gridAutoFlow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridAutoFlow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridAutoFlow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridAutoFlow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoFlow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridAutoFlow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridAutoFlow: 'a',
      [MQ.D]: {
        gridAutoFlow: 'b',
      },
      [MQ.T]: {
        gridAutoFlow: 'c',
      },
      [MQ.M]: {
        gridAutoFlow: 'd',
      },
    });
  });
});