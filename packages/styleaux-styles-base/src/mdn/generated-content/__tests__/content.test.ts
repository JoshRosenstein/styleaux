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

import { content } from '../content';

describe('content', () => {
  it('should return a function', () => {
    const result = content();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `content` as component and css prop', () => {
    const result = content()({ content: 'inherit' });
    expect(toStyles(result)).toEqual({ content: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = content<'a'>()({ content: 'a' });
    expect(toStyles(result)).toEqual({ content: 'a' });
  });

  it('should use an interface which marks `content` as optional', () => {
    const result = content<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = content<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ content: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      content: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = content<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      content: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      content: 'a',
      [MQ.D]: {
        content: 'b',
      },
      [MQ.T]: {
        content: 'c',
      },
      [MQ.M]: {
        content: 'd',
      },
    });
  });
});
