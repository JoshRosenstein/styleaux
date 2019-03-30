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

import { columns } from '../columns';

describe('columns', () => {
  it('should return a function', () => {
    const result = columns();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columns` as component and css prop', () => {
    const result = columns()({ columns: 'inherit' });
    expect(toStyles(result)).toEqual({ columns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columns<'a'>()({ columns: 'a' });
    expect(toStyles(result)).toEqual({ columns: 'a' });
  });

  it('should use an interface which marks `columns` as optional', () => {
    const result = columns<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columns<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columns: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columns<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columns: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columns: 'a',
      [MQ.D]: {
        columns: 'b',
      },
      [MQ.T]: {
        columns: 'c',
      },
      [MQ.M]: {
        columns: 'd',
      },
    });
  });
});
