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

import { createWritingMode } from '../writingMode';

describe('writingMode', () => {
  it('should return a function', () => {
    const result = createWritingMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `writingMode` as component and css prop', () => {
    const result = createWritingMode()({ writingMode: 'inherit' });
    expect(toStyles(result)).toEqual({ writingMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWritingMode<'a'>()({ writingMode: 'a' });
    expect(toStyles(result)).toEqual({ writingMode: 'a' });
  });

  it('should use an interface which marks `writingMode` as optional', () => {
    const result = createWritingMode<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createWritingMode<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ writingMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      writingMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWritingMode<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      writingMode: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      writingMode: 'a',
      [MQ.D]: {
        writingMode: 'b',
      },
      [MQ.T]: {
        writingMode: 'c',
      },
      [MQ.M]: {
        writingMode: 'd',
      },
    });
  });
});
