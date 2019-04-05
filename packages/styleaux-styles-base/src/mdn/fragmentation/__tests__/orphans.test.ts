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

import { createOrphans } from '../orphans';

describe('orphans', () => {
  it('should return a function', () => {
    const result = createOrphans();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `orphans` as component and css prop', () => {
    const result = createOrphans()({ orphans: 'inherit' });
    expect(toStyles(result)).toEqual({ orphans: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOrphans<'a'>()({ orphans: 'a' });
    expect(toStyles(result)).toEqual({ orphans: 'a' });
  });

  it('should use an interface which marks `orphans` as optional', () => {
    const result = createOrphans<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createOrphans<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ orphans: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      orphans: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOrphans<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      orphans: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      orphans: 'a',
      [MQ.D]: {
        orphans: 'b',
      },
      [MQ.T]: {
        orphans: 'c',
      },
      [MQ.M]: {
        orphans: 'd',
      },
    });
  });
});
